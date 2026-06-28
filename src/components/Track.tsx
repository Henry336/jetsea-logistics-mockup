"use client";

import { useState } from "react";

export default function Track() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const handleTrack = () => {
    const v = input.trim();
    if (!v) {
      setMessage("Enter a booking or AWB number to begin.");
      return;
    }
    setMessage(`Shipment ${v} · In transit · last scan SIN Changi`);
  };

  return (
    <section
      id="track"
      className="bg-navy-900 text-white relative overflow-hidden"
    >
      {/* Glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(700px 400px at 20% 120%, rgba(46,155,255,0.2), transparent 60%)",
        }}
      />

      <div className="relative max-w-[1240px] mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Left */}
        <div>
          <div className="font-mono text-[12.5px] tracking-[0.16em] text-azure-light mb-3.5">
            04 — VISIBILITY
          </div>
          <h2
            className="font-bold text-[clamp(26px,3vw,38px)] tracking-[-0.02em] leading-[1.1] m-0 mb-4"
            style={{ fontFamily: "var(--font-archivo)" }}
          >
            Know where your cargo is, at any moment
          </h2>
          <p className="text-[16.5px] text-[#AECAC9] leading-[1.65] m-0">
            Enter a booking or AWB number for a live status. For full milestone
            history, your dedicated consultant is one call away.
          </p>
        </div>

        {/* Right — tracker */}
        <div
          className="border border-white/12 rounded-[14px] p-7"
          style={{ background: "rgba(255,255,255,0.05)" }}
        >
          <label className="font-mono text-[11.5px] tracking-[0.12em] text-slate-muted block">
            TRACKING / AWB NUMBER
          </label>
          <div className="flex gap-2.5 mt-3 flex-wrap">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleTrack()}
              placeholder="e.g. 618-12345675"
              className="flex-1 min-w-[180px] bg-navy-800 border border-white/16 rounded-lg px-4 py-[14px] text-white text-[15px] font-mono placeholder:text-slate-muted outline-none focus:border-azure transition-colors"
            />
            <button
              onClick={handleTrack}
              className="bg-azure text-white border-none rounded-lg px-[22px] py-[14px] font-semibold text-[15px] cursor-pointer hover:bg-azure-hover transition-colors"
            >
              Track
            </button>
          </div>
          <div className="mt-4 min-h-[22px]">
            {message && (
              <div className="font-mono text-[13px] text-azure-light flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-azure inline-block shrink-0" />
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
