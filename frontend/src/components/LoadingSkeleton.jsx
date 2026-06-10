export default function LoadingSkeleton({ variant = "card" }) {
  if (variant === "detail") {
    return (
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="animate-pulse rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <div className="h-8 w-2/5 rounded-full bg-white/10" />
          <div className="mt-6 h-72 rounded-[1.5rem] bg-white/10" />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="h-28 rounded-2xl bg-white/10" />
            <div className="h-28 rounded-2xl bg-white/10" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-pulse rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
      <div className="h-52 rounded-[1.3rem] bg-white/10" />
      <div className="mt-4 h-5 w-3/5 rounded-full bg-white/10" />
      <div className="mt-3 h-4 w-full rounded-full bg-white/10" />
      <div className="mt-2 h-4 w-4/5 rounded-full bg-white/10" />
    </div>
  );
}
