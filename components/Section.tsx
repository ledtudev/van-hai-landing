import React from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`w-full border-b border-zinc-100 bg-white/80 backdrop-blur-sm ${className}`}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <header className="max-w-3xl space-y-4">
          {eyebrow && (
            <p className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
              {eyebrow}
            </p>
          )}
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm leading-relaxed text-zinc-600 sm:text-base">
              {subtitle}
            </p>
          )}
        </header>
        <div>{children}</div>
      </div>
    </section>
  );
}

