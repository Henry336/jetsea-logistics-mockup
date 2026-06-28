import Image from 'next/image';

const bullets = [
  "Timely shipment information",
  "Diversified routing options",
  "Cost-effective solutions",
  "A personalized touch",
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-white border-t border-b border-slate-border"
    >
      <div className="max-w-[1240px] mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-16 items-center">
        {/* Image column */}
        <div className="relative">
          <div
            className="rounded-[14px] overflow-hidden border border-slate-border"
            style={{
              aspectRatio: "5/5.4",
            }}
          >
            <Image
              src="/about-warehouse.jpg"
              alt="Team and warehouse operations"
              fill
              className="object-cover"
            />
          </div>

          {/* 1994 badge */}
          <div
            className="absolute right-[-18px] bottom-[-18px] bg-navy-900 text-white px-[26px] py-[22px] rounded-[12px]"
            style={{ boxShadow: "0 18px 50px rgba(7,24,46,0.3)" }}
          >
            <div
              className="font-extrabold text-[34px]"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              1994
            </div>
            <div className="font-mono text-[11px] text-slate-text tracking-[0.1em] mt-0.5">
              FORWARDING SINCE
            </div>
          </div>
        </div>

        {/* Content column */}
        <div>
          <div className="font-mono text-[12.5px] tracking-[0.16em] text-azure mb-3.5">
            02 — WHO WE ARE
          </div>
          <h2
            className="font-bold text-[clamp(26px,3vw,38px)] tracking-[-0.02em] leading-[1.1] m-0 mb-5"
            style={{ fontFamily: "var(--font-archivo)" }}
          >
            Freight forwarding is no longer just moving goods
          </h2>
          <p className="text-[16.5px] text-about-text leading-[1.7] m-0 mb-[18px]">
            Jetsea Logistics — formerly EAS International Transportation
            (S'pore) Pte Ltd — has delivered total logistics solutions from
            Singapore since 1994. We're built for today's fast-changing trade
            environment.
          </p>
          <p className="text-[16.5px] text-about-text leading-[1.7] m-0 mb-8">
            Our clients want a{" "}
            <strong className="text-body-text">freight consultant</strong>: a
            partner who manages global shipping needs with timely information,
            diversified options and cost-effective solutions — while keeping it
            personal.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {bullets.map((b) => (
              <div key={b} className="flex gap-3 items-start">
                <span className="text-azure font-mono font-semibold leading-none mt-[2px]">
                  →
                </span>
                <span className="text-[15px] text-body-text">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
