import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const RAW_BASE = "https://raw.githubusercontent.com/Alestelu1/austral-beacon-ai-lab/main/";
const PROJECTION_PATH = "knowledge-base/projections/antarctic-pulse/king-george-science-v1.json";

const selections = [
  {
    entityId: "base-cientifica-profesor-julio-escudero",
    claimId: "escudero-identity-001",
    claimsPath: "knowledge-base/entities/infrastructure/base-cientifica-profesor-julio-escudero/claims.json",
    title: "Base Científica Profesor Julio Escudero",
    authority: "INACH",
  },
  {
    entityId: "aerodromo-teniente-rodolfo-marsh",
    claimId: "marsh-claim-001",
    claimsPath: "knowledge-base/entities/infrastructure/aerodromo-teniente-rodolfo-marsh/claims.json",
    title: "Aeródromo Teniente Rodolfo Marsh Martin",
    authority: "DGAC",
  },
  {
    entityId: "bahia-fildes",
    claimId: "bahia-fildes-claim-001",
    claimsPath: "knowledge-base/entities/geography/bahia-fildes/claims.json",
    title: "Bahía Fildes",
    authority: "DIRECTEMAR",
  },
  {
    entityId: "villa-las-estrellas",
    claimId: "villa-estrellas-current-context-002",
    claimsPath: "knowledge-base/entities/places/villa-las-estrellas/claims.json",
    title: "Villa Las Estrellas",
    authority: "Fuerza Aérea de Chile",
  },
];

async function fetchJson(path) {
  const response = await fetch(`${RAW_BASE}${path}`);
  if (!response.ok) {
    throw new Error(`Knowledge sync failed for ${path}: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

const projection = await fetchJson(PROJECTION_PATH);
const allowedClaims = new Set(
  (projection.dependencies ? [] : projection.allowed_claims ?? []).map(
    (entry) => `${entry.entity_id}:${entry.claim_id}`,
  ),
);

// The product projection intentionally delegates claim selection to the shared
// King George projection. Resolve that dependency to validate selected claims.
const sharedProjection = await fetchJson(
  "knowledge-base/projections/shared/antarctic-gateway-king-george-v1.json",
);
for (const entry of sharedProjection.allowed_claims ?? []) {
  allowedClaims.add(`${entry.entity_id}:${entry.claim_id}`);
}

const items = [];
for (const selection of selections) {
  const key = `${selection.entityId}:${selection.claimId}`;
  if (!allowedClaims.has(key)) {
    throw new Error(`Claim ${key} is not allowed by the Antarctic Pulse/shared projections.`);
  }

  const claimsFile = await fetchJson(selection.claimsPath);
  const claim = claimsFile.claims?.find((candidate) => candidate.id === selection.claimId);
  if (!claim) throw new Error(`Missing canonical claim ${selection.claimId}.`);
  if (!String(claim.sensitivity).startsWith("public_core")) {
    throw new Error(`Claim ${selection.claimId} is not public_core.`);
  }

  items.push({
    entityId: selection.entityId,
    claimId: selection.claimId,
    title: selection.title,
    authority: selection.authority,
    statement: claim.statement,
    status: claim.status,
    sourceIds: claim.source_ids ?? [],
  });
}

const output = {
  generated: true,
  canonicalSourceRepository: "Alestelu1/austral-beacon-ai-lab",
  sourceProjectionId: projection.projection_id,
  sourceProjectionPath: PROJECTION_PATH,
  sharedProjectionId: sharedProjection.projection_id,
  rules: {
    noTrafficStatistics: true,
    noCurrentOperationalConditions: true,
    canonicalClaimsOnly: true,
  },
  items,
};

const here = dirname(fileURLToPath(import.meta.url));
const target = resolve(here, "../src/data/generated/king-george-science.json");
await mkdir(dirname(target), { recursive: true });
await writeFile(target, `${JSON.stringify(output, null, 2)}\n`, "utf8");
console.log(`Synced ${items.length} canonical Antarctic Pulse claims.`);
