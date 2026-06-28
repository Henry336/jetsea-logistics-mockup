const services = [
  {
    num: "01",
    title: "Air Freight",
    desc: "Time-critical airfreight via Changi with consolidations, charters and door-to-door routing worldwide.",
    icon: (
      <span className="w-4 h-4 border-[2.5px] border-azure rounded-[3px] rotate-45 block" />
    ),
  },
  {
    num: "02",
    title: "Sea Freight",
    desc: "FCL and LCL ocean freight with competitive rates across major trade lanes and reliable sailing schedules.",
    icon: (
      <span className="w-[18px] h-[18px] border-[2.5px] border-azure rounded-full block" />
    ),
  },
  {
    num: "03",
    title: "Local Handling",
    desc: "Customs clearance, warehousing and last-mile delivery handled in-market by our Singapore team.",
    icon: (
      <span className="w-[18px] h-3.5 border-[2.5px] border-azure rounded-[2px] block" />
    ),
  },
  {
    num: "04",
    title: "Cost-Saving Solutions",
    desc: "Route and mode optimization that trims landed cost without compromising transit reliability.",
    icon: (
      <span className="w-4 h-4 border-[2.5px] border-azure rounded-full border-r-transparent block" />
    ),
  },
  {
    num: "05",
    title: "On-Time Logistics",
    desc: "Proactive milestone tracking and exception management so your supply chain keeps its promises.",
    icon: (
      <span className="w-4 h-4 border-l-[2.5px] border-b-[2.5px] border-azure block" />
    ),
  },
  {
    num: "06",
    title: "We Care",
    desc: "A dedicated freight consultant per account — a single, personal point of contact you can reach.",
    icon: (
      <span
        className="w-4 h-4 border-[2.5px] border-azure block"
        style={{ borderRadius: "50% 50% 50% 0" }}
      />
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="max-w-[1240px] mx-auto px-8 py-24">
      {/* Header */}
      <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
        <div>
          <div className="font-mono text-[12.5px] tracking-[0.16em] text-azure mb-3.5">
            01 — WHAT WE DO
          </div>
          <h2
            className="font-bold text-[clamp(28px,3.5vw,40px)] tracking-[-0.02em] m-0 max-w-[560px] leading-[1.08]"
            style={{ fontFamily: "var(--font-archivo)" }}
          >
            A full freight desk, end to end
          </h2>
        </div>
        <p className="text-[16px] text-slate-dim max-w-[380px] m-0 leading-[1.6]">
          From the first booking to final-mile handling, one accountable team
          manages every leg of your shipment.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
        {services.map((svc) => (
          <div
            key={svc.num}
            className="bg-white border border-slate-border rounded-[14px] p-7 group hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(8,52,62,0.12)] hover:border-[#BEE0DA] transition-all duration-[250ms]"
            style={{ boxShadow: "0 1px 2px rgba(8,52,62,0.04)" }}
          >
            <div className="font-mono text-[12px] text-azure mb-[18px]">
              {svc.num}
            </div>
            <div className="w-11 h-11 rounded-[10px] bg-[#E4F4F2] flex items-center justify-center mb-[18px]">
              {svc.icon}
            </div>
            <h3
              className="font-bold text-[20px] m-0 mb-2"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              {svc.title}
            </h3>
            <p className="text-[14.5px] text-slate-dim leading-[1.6] m-0">
              {svc.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
