import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-navy-900 text-white overflow-hidden">
      {/* Azure radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 78% -10%, rgba(46,155,255,0.22), transparent 60%)",
        }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(180deg, #000 0%, transparent 85%)",
        }}
      />

      {/* Content */}
      <div className="relative max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center min-h-[600px] py-[72px]">

          {/* Left column */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 font-mono text-[12px] tracking-[0.16em] text-azure-light border border-azure-light/30 px-[14px] py-[7px] rounded-full mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-azure inline-block" />
              TOTAL LOGISTICS SOLUTIONS
            </div>

            {/* Headline */}
            <h1
              className="font-extrabold text-[clamp(38px,5vw,60px)] leading-[1.04] tracking-[-0.025em] mb-6"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              Freight, handled by{" "}
              <span className="text-lime-bright">consultants</span> — not just
              carriers.
            </h1>

            {/* Subtext */}
            <p className="text-[18.5px] leading-[1.6] text-[#AECAC9] max-w-[520px] mb-9">
              A Singapore-based total logistics provider since 1994. We manage
              your global shipping with timely information, diversified options
              and cost-effective solutions — with the personalized touch
              enterprises rely on.
            </p>

            {/* CTAs */}
            <div className="flex gap-3.5 flex-wrap mb-11">
              <a
                href="#quote"
                className="inline-flex items-center gap-2.5 bg-lime text-navy-900 no-underline font-bold text-[15.5px] px-6 py-[15px] rounded-[7px] hover:-translate-y-0.5 transition-all duration-200"
                style={{ boxShadow: "0 10px 30px rgba(174,206,21,0.40)" }}
              >
                Request a Quote{" "}
                <span className="font-mono">→</span>
              </a>
              <a
                href="#track"
                className="inline-flex items-center gap-2.5 text-white no-underline font-semibold text-[15.5px] px-6 py-[15px] rounded-[7px] border border-white/16 hover:bg-white/12 transition-colors"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                Track a Shipment
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-9 flex-wrap">
              {[
                { value: "30+", label: "YEARS OPERATING" },
                { value: "4", label: "GLOBAL NETWORKS" },
                { value: "4", label: "ACCREDITATIONS" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="font-extrabold text-[30px] text-white"
                    style={{ fontFamily: "var(--font-archivo)" }}
                  >
                    {stat.value.replace("+", "")}
                    {stat.value.includes("+") && (
                      <span className="text-azure">+</span>
                    )}
                  </div>
                  <div className="font-mono text-[13px] text-slate-muted tracking-[0.04em] mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — hero image */}
          <div className="relative hidden lg:block">
            <div
              className="relative rounded-[14px] overflow-hidden border border-white/12 aspect-[4/4.6] flex items-end"
              style={{
                boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
              }}
            >
              <Image
                src="/hero-cargo.jpg"
                alt="Port and air cargo operations"
                fill
                className="object-cover"
              />

              {/* Shipment status card */}
              <div
                className="relative m-[18px] p-4 rounded-[10px] border border-white/12 z-10"
                style={{
                  background: "rgba(6,49,59,0.82)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div className="font-mono text-[11px] text-azure-light tracking-[0.1em] mb-1.5">
                  LIVE SHIPMENT · SIN → ROT
                </div>
                <div className="text-[14px] text-[#E6F1ED] font-medium">
                  Air freight · In transit · ETA on schedule
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accreditation strip */}
      <div
        className="relative border-t border-white/8"
        style={{ background: "rgba(255,255,255,0.02)" }}
      >
        <div className="max-w-[1240px] mx-auto px-8 py-5 flex items-center gap-10 flex-wrap justify-between">
          <span className="font-mono text-[11.5px] text-[#7C9B97] tracking-[0.14em]">
            ACCREDITED &amp; CERTIFIED BY
          </span>
          <div className="flex gap-10 items-center flex-wrap">
            {["IATA", "FIATA", "SAAA", "SLA"].map((cert) => (
              <span
                key={cert}
                className="font-extrabold text-[17px] text-[#C0D7D2] tracking-[0.04em]"
                style={{ fontFamily: "var(--font-archivo)" }}
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
