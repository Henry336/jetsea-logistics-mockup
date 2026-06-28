export default function UtilityBar() {
  return (
    <div className="bg-navy-900 text-slate-text text-[12.5px] tracking-[0.02em]">
      <div className="max-w-[1240px] mx-auto px-8 py-[9px] flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-azure inline-block" />
          <span>SINGAPORE&nbsp;·&nbsp;CHANGI CARGO COMPLEX&nbsp;·&nbsp;EST. 1994</span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href="#contact"
            className="text-slate-text hover:text-white transition-colors no-underline text-[12.5px]"
          >
            References
          </a>
          <a
            href="#contact"
            className="text-slate-text hover:text-white transition-colors no-underline text-[12.5px]"
          >
            Contact
          </a>
          <a
            href="tel:+6565422500"
            className="text-white no-underline font-mono font-medium text-[12.5px]"
          >
            +65 6542 2500
          </a>
        </div>
      </div>
    </div>
  );
}
