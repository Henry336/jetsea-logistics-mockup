const networks = [
  "Planet Logistics\nNetwork",
  "Worldwide\n3PL Network",
  "Millennium\nLogistics Network",
  "Centennial\nLogistics Network",
];

export default function Network() {
  return (
    <section id="network" className="max-w-[1240px] mx-auto px-8 py-24">
      {/* Header */}
      <div className="text-center max-w-[620px] mx-auto mb-[52px]">
        <div className="font-mono text-[12.5px] tracking-[0.16em] text-azure mb-3.5">
          03 — GLOBAL REACH
        </div>
        <h2
          className="font-bold text-[clamp(28px,3.5vw,40px)] tracking-[-0.02em] leading-[1.08] m-0 mb-4"
          style={{ fontFamily: "var(--font-archivo)" }}
        >
          A worldwide network behind every shipment
        </h2>
        <p className="text-[16.5px] text-slate-dim leading-[1.6] m-0">
          Membership in leading independent forwarding alliances gives your
          cargo trusted partners in every major market.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[18px]">
        {networks.map((name) => (
          <div
            key={name}
            className="bg-white border border-slate-border rounded-[14px] h-[130px] flex items-center justify-center p-5 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(8,52,62,0.12)] hover:border-[#BEE0DA] transition-all duration-[250ms]"
            style={{ boxShadow: "0 1px 2px rgba(8,52,62,0.04)" }}
          >
            <span
              className="font-bold text-[16px] text-card-text text-center leading-[1.3]"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              {name.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < name.split("\n").length - 1 && <br />}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
