interface Props {
  index: string;
  label: string;
  title: React.ReactNode;
  subtitle?: string;
}

export function SectionHeader({ index, label, title, subtitle }: Props) {
  return (
    <div className="grid grid-cols-12 gap-6 mb-16">
      <div className="col-span-12 md:col-span-3">
        <div className="mono-label text-primary">{index}</div>
        <div className="mono-label mt-2">{label}</div>
      </div>
      <div className="col-span-12 md:col-span-9 max-w-3xl">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-balance">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
