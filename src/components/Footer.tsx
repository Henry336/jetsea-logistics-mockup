import Logo from "./Logo";

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "References", href: "#network" },
  { label: "Enquiries", href: "#quote" },
  { label: "Tracker", href: "#track" },
];

const accreditations = [
  "IATA Agent",
  "FIATA Member",
  "SAAA Member",
  "SLA Member",
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-navy-900 text-slate-text border-t border-white/6"
    >
      <div className="max-w-[1240px] mx-auto px-8 pt-[72px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center mb-[18px]">
            <Logo height={44} dark />
          </div>
          <p className="text-[14px] leading-[1.6] max-w-[300px] m-0 text-[#7C9B97]">
            Singapore-based total logistics solutions provider. Your global
            freight, managed by people who answer the phone.
          </p>
        </div>

        {/* Company links */}
        <div>
          <div className="font-mono text-[11px] tracking-[0.14em] text-[#5E817C] mb-4">
            COMPANY
          </div>
          <div className="flex flex-col gap-[11px]">
            {companyLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-text no-underline text-[14.5px] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Accreditations */}
        <div>
          <div className="font-mono text-[11px] tracking-[0.14em] text-[#5E817C] mb-4">
            ACCREDITATIONS
          </div>
          <div className="flex flex-col gap-[11px] text-[14.5px]">
            {accreditations.map((a) => (
              <span key={a}>{a}</span>
            ))}
          </div>
        </div>

        {/* Location */}
        <div>
          <div className="font-mono text-[11px] tracking-[0.14em] text-[#5E817C] mb-4">
            LOCATION
          </div>
          <p className="text-[14.5px] leading-[1.7] m-0 mb-3.5 text-slate-text">
            Jetsea Logistics (S) Pte Ltd
            <br />
            9 Airline Road, #02-18
            <br />
            Cargo Agent's Building D
            <br />
            Singapore 819827
          </p>
          <a
            href="tel:+6565422500"
            className="font-mono text-white no-underline text-[15px] hover:text-azure transition-colors"
          >
            +65 6542 2500
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1240px] mx-auto px-8 py-7 mt-14 border-t border-white/7 flex items-center justify-between gap-4 flex-wrap">
        <span className="text-[13px] text-[#5E817C]">
          © 2026 Jetsea Logistics (S) Pte Ltd. All rights reserved.
        </span>
        <span className="font-mono text-[12px] text-[#5E817C] tracking-[0.06em]">
          EST. 1994 · SINGAPORE
        </span>
      </div>
    </footer>
  );
}
