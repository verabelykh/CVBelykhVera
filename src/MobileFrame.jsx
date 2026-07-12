import {
  imgFrame2136141452,
  imgImg54491,
  imgImage2090010098,
  imgImage2090010097,
  imgImage2090010094,
  imgImage2090010095,
  imgImage2090010096,
  imgImage2090010099,
  imgImage2090010100,
  imgImage2090010101,
  imgImage2090010102,
  imgImage2090010103,
  imgImage2090010104,
  imgImage2090010105,
  imgImage2090010106,
  imgImage2090010107,
  imgImage2090010109,
  imgImage2090010110,
  imgImage2090010087,
  imgImage2090010088,
  imgImage2090010089,
  imgImage2090010090,
  imgImage2090010091,
  imgImage2090010092,
  imgImage2090010093,
  imgImage2090010111,
  imgImage2090010112,
  imgImage2090010113,
} from "./assets.js";

/* ---------- Небольшие переиспользуемые блоки ---------- */

function HScroll({ children, className = "" }) {
  return (
    <div
      className={`flex overflow-x-auto gap-3 snap-x snap-mandatory px-4 pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${className}`}
    >
      {children}
    </div>
  );
}

function Dots({ count = 3 }) {
  return (
    <div className="flex gap-1.5 justify-center mt-3">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`size-1.5 rounded-full ${i === 0 ? "bg-[#004cc9]" : "bg-[#c7d4ef]"}`}
        />
      ))}
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="font-['Nunito_Sans'] font-semibold text-[28px] leading-[34px] text-black px-4">
      {children}
    </h2>
  );
}

function CaseHeader({ title, subtitle }) {
  return (
    <div className="px-4 flex flex-col gap-0.5">
      <h3 className="font-['Nunito_Sans'] font-semibold text-[26px] leading-[32px] text-black">
        {title}
      </h3>
      <p className="font-['Nunito_Sans'] text-[15px] text-[#878787] tracking-wide">
        {subtitle}
      </p>
    </div>
  );
}

function TaskBlock({ label = "Task:", children }) {
  return (
    <div className="px-4 flex flex-col gap-2">
      <p className="font-['Nunito_Sans'] font-semibold text-[18px] text-[#1e1e1e]">
        {label}
      </p>
      <p className="font-['Nunito_Sans'] italic text-[15px] leading-[20px] text-[#1e1e1e]">
        {children}
      </p>
    </div>
  );
}

function InsightCard({ title, children, tone = "light" }) {
  const bg = tone === "dark" ? "bg-[#1e1e1e] text-white" : "bg-[rgba(0,76,201,0.08)] text-[#1e1e1e]";
  return (
    <div className={`rounded-2xl p-4 flex flex-col gap-1.5 ${bg}`}>
      <p className="font-['Nunito_Sans'] font-bold text-[16px]">{title}</p>
      <p className="font-['Nunito_Sans'] font-semibold text-[13px] leading-[18px] opacity-90">
        {children}
      </p>
    </div>
  );
}

function PhoneCard({ src, className = "" }) {
  return (
    <div
      className={`snap-start shrink-0 h-[420px] w-[210px] rounded-[24px] overflow-hidden shadow-[0px_1px_8px_0px_rgba(0,76,201,0.15)] ${className}`}
    >
      <img alt="" src={src} className="w-full h-full object-contain bg-white" />
    </div>
  );
}

/* ---------- Основной компонент ---------- */

export default function MobileFrame() {
  return (
    <div className="w-full bg-white flex flex-col gap-10 pt-10 pb-16 overflow-x-hidden">
      {/* HERO */}
      <div className="flex flex-col gap-4">
        <div className="relative h-[420px] mx-4 rounded-2xl overflow-hidden">
          <img
            alt=""
            src={imgFrame2136141452}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <img
            alt=""
            src={imgImg54491}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="px-4 flex flex-col gap-3">
          <div>
            <h1 className="font-['Nunito_Sans'] font-extrabold text-[34px] leading-[38px] text-[#004cc9]">
              Senior Product designer
            </h1>
            <p className="font-['Nunito_Sans'] font-semibold text-[20px] text-[#1e1e1e]">
              Belykh Vera
            </p>
          </div>
          <p className="font-['Nunito_Sans'] italic text-[15px] leading-[20px] text-[#1e1e1e]">
            I design products that drive metric growth — from research to
            launch
          </p>
          <div className="flex gap-2">
            <a
              href="https://t.me/MsVera"
              target="_blank"
              className="flex-1 bg-[#1e1e1e] text-white font-['Nunito_Sans'] font-bold text-[15px] text-center rounded-2xl py-3.5"
            >
              Telegram
            </a>
            <a
              href="mailto:svera2000@mail.ru"
              target="_blank"
              className="flex-1 border-2 border-[#1e1e1e] text-[#1e1e1e] font-['Nunito_Sans'] font-bold text-[15px] text-center rounded-2xl py-3.5"
            >
              E-mail
            </a>
          </div>
        </div>

        <HScroll>
          {[
            ["5+", "years of experience"],
            ["3", "major products"],
            ["+15%", "average check at Wildberries"],
          ].map(([n, l]) => (
            <div
              key={l}
              className="snap-start shrink-0 w-[150px] bg-[rgba(0,76,201,0.08)] rounded-2xl p-3 flex flex-col items-center text-center"
            >
              <p className="font-['Nunito_Sans'] font-bold text-[20px] text-[#004cc9]">
                {n}
              </p>
              <p className="font-['Nunito_Sans'] font-semibold text-[13px] text-[#1e1e1e]">
                {l}
              </p>
            </div>
          ))}
        </HScroll>
      </div>

      {/* PRINCIPLES */}
      <div className="flex flex-col gap-3">
        <SectionTitle>Principles and Approach</SectionTitle>
        <HScroll>
          <div className="snap-start shrink-0 w-[85vw] max-w-[340px] bg-gradient-to-b from-[rgba(0,76,201,0.15)] to-[#004cc9] rounded-2xl p-4 flex flex-col gap-3 min-h-[220px]">
            <p className="font-['Nunito_Sans'] font-bold text-[19px] text-[#1e1e1e]">
              Data before pixels
            </p>
            <p className="font-['Nunito_Sans'] font-semibold text-[14px] leading-[19px] text-[#1e1e1e]">
              I don't implement changes without a rationale: hypothesis —
              research — A/B testing — decision. Design is an argument, not
              a matter of taste
            </p>
          </div>

          <div className="snap-start shrink-0 w-[85vw] max-w-[340px] bg-gradient-to-b from-[rgba(0,76,201,0.15)] to-[#004cc9] rounded-2xl p-4 flex flex-col gap-3">
            <div>
              <p className="font-['Nunito_Sans'] font-bold text-[19px] text-[#1e1e1e]">
                Metrics and aesthetics — not a contradiction
              </p>
              <p className="font-['Nunito_Sans'] font-semibold text-[14px] leading-[19px] text-[#1e1e1e] mt-1">
                I believe that a beautiful product sells better. I strike a
                balance between business goals and high-quality visuals
              </p>
            </div>
            <div className="flex gap-2 flex-wrap mt-auto">
              {["Metrics first", "Visual quality", "Conversion up"].map((t, i) => (
                <span
                  key={t}
                  className={`font-['Nunito_Sans'] font-medium text-[13px] text-white rounded-full px-3 py-1.5 ${i === 0 ? "bg-[#063994]" : "border border-[#a4a4a4]"}`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="snap-start shrink-0 w-[85vw] max-w-[340px] bg-gradient-to-b from-[rgba(0,76,201,0.15)] to-[#004cc9] rounded-2xl p-4 flex flex-col gap-3">
            <p className="font-['Nunito_Sans'] font-bold text-[19px] text-[#1e1e1e]">
              I listen to people — I drive the product
            </p>
            <p className="font-['Nunito_Sans'] font-semibold text-[14px] leading-[19px] text-[#1e1e1e]">
              I quickly pinpoint the problem: the hallway test, the interview,
              and the flow analysis. Research is a tool, not a stage
            </p>
          </div>

          <div className="snap-start shrink-0 w-[85vw] max-w-[340px] bg-gradient-to-b from-[rgba(0,76,201,0.15)] to-[#004cc9] rounded-2xl p-4 flex flex-col gap-3">
            <p className="font-['Nunito_Sans'] font-bold text-[19px] text-[#1e1e1e]">
              Systems thinking in Figma
            </p>
            <p className="font-['Nunito_Sans'] font-semibold text-[14px] leading-[19px] text-[#1e1e1e]">
              Design systems, complex components, auto-layout. I save the
              team a lot of time
            </p>
          </div>
        </HScroll>
        <Dots count={4} />
      </div>

      {/* CASES TITLE */}
      <div className="px-4">
        <h2 className="font-['Nunito_Sans'] font-semibold text-[40px] leading-[46px] text-black">
          Cases
        </h2>
        <div className="h-px bg-[#e5e5e5] w-full mt-3" />
      </div>

      {/* CHECKOUT */}
      <div className="flex flex-col gap-4">
        <CaseHeader title="Checkout" subtitle="WILDBERRIES RIV GOSH" />
        <TaskBlock>
          The five-step order process, spread across several screens, created
          barriers for users—a long process, many clicks, and a high drop-off
          rate during the data entry stage
        </TaskBlock>
        <div className="bg-[rgba(0,76,201,0.08)] py-5 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <p className="font-['Nunito_Sans'] font-bold text-[16px] text-[#1e1e1e] px-4">
              How it was
            </p>
            <HScroll>
              <PhoneCard src={imgImage2090010098} />
              <PhoneCard src={imgImage2090010097} />
              <PhoneCard src={imgImage2090010094} />
              <PhoneCard src={imgImage2090010095} />
              <PhoneCard src={imgImage2090010096} />
            </HScroll>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-['Nunito_Sans'] font-bold text-[16px] text-[#1e1e1e] px-4">
              As it turned out
            </p>
            <div className="px-4">
              <PhoneCard src={imgImage2090010099} className="w-full max-w-[260px] mx-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* GIFT CARD */}
      <div className="flex flex-col gap-4">
        <CaseHeader title="Gift card" subtitle="WILDBERRIES RIV GOSH" />
        <TaskBlock>
          Outdated gift card section: 5-step checkout process, outdated UI,
          high bounce rate. We needed to completely redesign the section and
          increase purchase conversion
        </TaskBlock>
        <div className="px-4 grid grid-cols-2 gap-3">
          <InsightCard title="Purchase path: 5 — 2">
            I completely redesigned the flow: removed unnecessary screens and
            combined the steps. 2 steps instead of 5
          </InsightCard>
          <InsightCard title="Purchase History">
            Added a "History" section — users can view purchased cards,
            status and balance
          </InsightCard>
          <InsightCard title="Additional points of sale">
            Implemented additional entry points to the gift card section
            within the app
          </InsightCard>
          <InsightCard title="Modern UI">
            Updated visual style: typography, components, animations
          </InsightCard>
        </div>
        <div className="bg-[rgba(0,76,201,0.08)] py-5 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <p className="font-['Nunito_Sans'] font-bold text-[16px] text-[#1e1e1e] px-4">
              How it was
            </p>
            <HScroll>
              <PhoneCard src={imgImage2090010100} />
              <PhoneCard src={imgImage2090010101} />
              <PhoneCard src={imgImage2090010102} />
              <PhoneCard src={imgImage2090010103} />
              <PhoneCard src={imgImage2090010104} />
            </HScroll>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-['Nunito_Sans'] font-bold text-[16px] text-[#1e1e1e] px-4">
              As it turned out
            </p>
            <HScroll>
              <PhoneCard src={imgImage2090010105} />
              <PhoneCard src={imgImage2090010106} />
              <PhoneCard src={imgImage2090010107} />
              <PhoneCard src={imgImage2090010109} />
              <PhoneCard src={imgImage2090010110} />
            </HScroll>
          </div>
        </div>
      </div>

      {/* TRAVEL */}
      <div className="flex flex-col gap-4">
        <CaseHeader title="Travel" subtitle="WILDBERRIES" />
        <TaskBlock label="My role:">
          The sole designer for the aviation division. Full cycle: from
          research to launch. Served as both product manager and design lead —
          coordinating tasks, managing priorities, and onboarding new
          employees
        </TaskBlock>
        <div className="px-4 grid grid-cols-2 gap-3">
          <InsightCard title="Additional Services When Booking">
            Seat selection, extra baggage, insurance. Result: +15% average
            transaction value
          </InsightCard>
          <InsightCard title="Search Calendar with Prices">
            Optimized the calendar's UX + added price display, fewer steps
          </InsightCard>
          <InsightCard title="Reservation Statuses">
            Users always know the status of their orders, reducing support
            workload
          </InsightCard>
          <InsightCard title="Migration to the design system">
            Migrated booking and payment stages to a unified design system
          </InsightCard>
        </div>
        <div className="bg-[rgba(0,76,201,0.08)] py-5 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="font-['Nunito_Sans'] font-bold text-[16px] text-[#1e1e1e] px-4">
              Additional services
            </p>
            <div className="px-4 grid grid-cols-2 gap-3">
              <img alt="" src={imgImage2090010087} className="rounded-2xl w-full object-contain shadow-[0px_1px_8px_0px_rgba(0,76,201,0.15)]" />
              <img alt="" src={imgImage2090010088} className="rounded-2xl w-full object-contain shadow-[0px_1px_8px_0px_rgba(0,76,201,0.15)]" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-['Nunito_Sans'] font-bold text-[16px] text-[#1e1e1e] px-4">
              Search calendar with prices
            </p>
            <div className="px-4 grid grid-cols-2 gap-3">
              <img alt="" src={imgImage2090010089} className="rounded-2xl w-full object-contain shadow-[0px_1px_8px_0px_rgba(0,76,201,0.15)]" />
              <img alt="" src={imgImage2090010090} className="rounded-2xl w-full object-contain shadow-[0px_1px_8px_0px_rgba(0,76,201,0.15)]" />
            </div>
          </div>
          <div className="flex flex-col gap-2 px-4">
            <p className="font-['Nunito_Sans'] font-bold text-[16px] text-[#1e1e1e]">
              Reservation statuses
            </p>
            <img alt="" src={imgImage2090010091} className="rounded-2xl w-full object-cover shadow-[0px_1px_8px_0px_rgba(0,76,201,0.15)]" />
            <img alt="" src={imgImage2090010092} className="rounded-2xl w-full object-cover shadow-[0px_1px_8px_0px_rgba(0,76,201,0.15)]" />
          </div>
          <div className="flex flex-col gap-2 px-4">
            <p className="font-['Nunito_Sans'] font-bold text-[16px] text-[#1e1e1e]">
              Migration to a design system
            </p>
            <img alt="" src={imgImage2090010111} className="rounded-2xl w-full object-cover shadow-[0px_1px_8px_0px_rgba(0,76,201,0.15)]" />
          </div>
        </div>
      </div>

      {/* UX RESEARCH */}
      <div className="flex flex-col gap-4">
        <CaseHeader title="UX Research and JTBD" subtitle="Santehnika-online" />
        <div className="px-4 grid grid-cols-2 gap-3">
          <div className="bg-[#1e1e1e] text-white rounded-2xl p-4 flex flex-col items-center text-center gap-1">
            <p className="font-['Nunito_Sans'] font-black text-[36px]">30</p>
            <p className="font-['Nunito_Sans'] italic text-[13px]">in-depth interviews</p>
          </div>
          <div className="bg-[#1e1e1e] text-white rounded-2xl p-4 flex flex-col items-center text-center gap-1">
            <p className="font-['Nunito_Sans'] font-black text-[36px]">6</p>
            <p className="font-['Nunito_Sans'] italic text-[13px]">research methods</p>
          </div>
        </div>
        <div className="px-4 flex flex-col gap-3">
          <InsightCard title="Identify the user's pain point">
            30 in-person interviews revealed real barriers to purchasing and
            unmet needs that were not apparent in the analytics
          </InsightCard>
          <InsightCard title="Before development begins">
            I tested the prototypes on users before development. We
            redesigned navigation to align with people's mental models
          </InsightCard>
          <InsightCard title="After launch">
            Systematic collection of feedback has become part of the
            workflow
          </InsightCard>
        </div>
        <TaskBlock label="Result:">
          I optimized the funnel — I eliminated friction points that weren't
          apparent without a structural analysis. The analysis served as a
          basis for discussion with the team, rather than just a formality
        </TaskBlock>
      </div>

      {/* EXPERIENCE */}
      <div className="flex flex-col gap-4">
        <SectionTitle>Experience and Growth</SectionTitle>
        <div className="px-4 flex gap-4">
          <div className="relative w-6 shrink-0">
            <div className="absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-px bg-[#004cc9]" />
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`absolute left-1/2 -translate-x-1/2 size-5 rounded-full border ${i < 2 ? "bg-[#004cc9] border-[#004cc9]" : "bg-[#6693de] border-[#6693de]"}`}
                style={{ top: `${i * 110 + 8}px` }}
              />
            ))}
          </div>
          <div className="flex flex-col gap-8 flex-1">
            {[
              ["April 2026 – present", "Wildberries × RIV GOSH", "Senior Product Designer", "Checkout Optimization, Redesign of the Gift Card Section. Focus on Conversions and UX"],
              ["January 2025 – April 2026", "Wildberries Travel", "Senior Product Designer", "+15% average check. Air travel: reservations, additional services, design system"],
              ["June 2023 – January 2025", "Santehnika-online", "Product Designer", "Full cycle: JTBD, UX research, A/B testing, funnel optimization"],
              ["December 2022 — June 2023", "Planet for me", "Middle UX/UI Designer", "Web and iOS/Android mobile apps. Implementing a design system in Figma"],
              ["December 2021 – May 2022", "EcoManagement", "UI/UX Designer", "UX/UI Development for Websites and Apps. Design System, Personas, CJM"],
            ].map(([date, company, role, desc]) => (
              <div key={company} className="flex flex-col gap-1">
                <p className="font-['Nunito_Sans'] italic text-[12px] text-[#878787]">{date}</p>
                <p className="font-['Nunito_Sans'] font-semibold text-[18px] text-[#1e1e1e]">{company}</p>
                <p className="font-['Nunito_Sans'] font-extrabold text-[14px] text-[#004cc9]">{role}</p>
                <p className="font-['Nunito_Sans'] italic text-[14px] leading-[18px] text-[#1e1e1e]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex flex-col items-center gap-6 px-4 pt-4">
        <h2 className="font-['Nunito_Sans'] font-extrabold text-[32px] leading-[38px] text-[#004cc9] text-center">
          Ready for new challenges
        </h2>
        <div className="flex gap-2 w-full">
          <a
            href="https://t.me/MsVera"
            target="_blank"
            className="flex-1 bg-[#1e1e1e] text-white font-['Nunito_Sans'] font-bold text-[15px] text-center rounded-2xl py-3.5"
          >
            Telegram
          </a>
          <a
            href="mailto:svera2000@mail.ru"
            target="_blank"
            className="flex-1 border-2 border-[#1e1e1e] text-[#1e1e1e] font-['Nunito_Sans'] font-bold text-[15px] text-center rounded-2xl py-3.5"
          >
            E-mail
          </a>
        </div>
        <img alt="" src={imgImage2090010112} className="w-[220px] h-auto object-contain" />
      </div>
    </div>
  );
}
