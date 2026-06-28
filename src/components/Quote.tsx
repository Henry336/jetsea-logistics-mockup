export default function Quote() {
  return (
    <section id="quote" className="max-w-[1240px] mx-auto px-8 py-24">
      <div
        className="rounded-[20px] px-14 py-16 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg,#0A3A44,#0E4A56)",
        }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(600px 400px at 85% 20%, #000, transparent 70%)",
          }}
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          {/* Left */}
          <div>
            <h2
              className="font-extrabold text-[clamp(28px,3.5vw,42px)] tracking-[-0.025em] leading-[1.06] text-white m-0 mb-4"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              Ready to move smarter freight?
            </h2>
            <p className="text-[17px] text-[#AECAC9] leading-[1.6] m-0 max-w-[480px]">
              Tell us your lanes and volumes. We'll come back with diversified
              options and a clear, cost-effective plan — usually within one
              business day.
            </p>
          </div>

          {/* Right — CTAs */}
          <div className="flex flex-col gap-3">
            <a
              href="mailto:enquiry@jetsea.com.sg"
              className="flex items-center justify-between gap-3.5 bg-lime text-navy-900 no-underline font-bold text-[16px] px-6 py-[18px] rounded-[10px] hover:-translate-y-0.5 transition-all duration-200"
            >
              Request a Quote{" "}
              <span className="font-mono">→</span>
            </a>
            <a
              href="tel:+6565422500"
              className="flex items-center justify-between gap-3.5 text-white no-underline font-semibold text-[16px] px-6 py-[18px] rounded-[10px] border border-white/16 hover:bg-white/14 transition-colors"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <span>
                Call{" "}
                <span className="font-mono">+65 6542 2500</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
