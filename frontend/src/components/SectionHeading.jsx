export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`${alignment} max-w-3xl`}>
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/70">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
