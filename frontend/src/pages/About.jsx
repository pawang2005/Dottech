export default function About() {
  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
            About
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            DotTech Academy
          </h1>
          <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
            <p>
              DotTech Academy is a modern computer education institute focused
              on teaching practical technology skills.
            </p>
            <p>
              Our mission is to make emerging technologies accessible to
              everyone.
            </p>
            <p>
              We begin with Generative AI education and will expand to
              full-stack development, cybersecurity, cloud computing, data
              analytics and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
