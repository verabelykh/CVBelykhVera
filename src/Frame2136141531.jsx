import {
  imgFrame2136141452,
  imgImage2090010089,
  imgImage2090010090,
  imgVector45,
  imgLine1,
} from "./assets.js";

import heroPortrait from "./assets/photos/hero-portrait.png";
import dashboardIllustration from "./assets/photos/dashboard-illustration.png";
import keyboardIllustration from "./assets/photos/keyboard-illustration.png";
import listenToPeopleBg from "./assets/photos/listen-to-people-bg.png";
import footerHeartLeft from "./assets/photos/footer-heart-left.png";
import footerHeartRight from "./assets/photos/footer-heart-right.png";
import travelService1 from "./assets/photos/travel-service-1.png";
import travelService2 from "./assets/photos/travel-service-2.png";
import travelReservation1 from "./assets/photos/travel-reservation-1.png";
import travelReservation2 from "./assets/photos/travel-reservation-2.png";
import travelReservation3 from "./assets/photos/travel-reservation-3.png";
import travelMigration from "./assets/photos/travel-migration.png";
import checkoutCollage1 from "./assets/photos/checkout-collage-1.png";
import checkoutCollage2 from "./assets/photos/checkout-collage-2.png";
import checkoutCollage3 from "./assets/photos/checkout-collage-3.png";
import checkoutCollage4 from "./assets/photos/checkout-collage-4.png";
import checkoutCollage5 from "./assets/photos/checkout-collage-5.png";
import checkoutTurned from "./assets/photos/checkout-turned.png";
import giftcardHow1 from "./assets/photos/giftcard-how-1.png";
import giftcardHow2 from "./assets/photos/giftcard-how-2.png";
import giftcardHow3 from "./assets/photos/giftcard-how-3.png";
import giftcardHow4 from "./assets/photos/giftcard-how-4.png";
import giftcardHow5Overlay from "./assets/photos/giftcard-how-5-overlay.png";
import giftcardTurned1 from "./assets/photos/giftcard-turned-1.png";
import giftcardTurned2 from "./assets/photos/giftcard-turned-2.png";
import giftcardTurned3 from "./assets/photos/giftcard-turned-3.png";
import giftcardTurned4 from "./assets/photos/giftcard-turned-4.png";
import giftcardTurned5 from "./assets/photos/giftcard-turned-5.png";

import { useState, useEffect, useRef } from "react";

const DESIGN_WIDTH = 1440;

function useScaleToFit() {
  const contentRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [scaledHeight, setScaledHeight] = useState(null);

  useEffect(() => {
    const update = () => {
      const vw = document.documentElement.clientWidth;
      const nextScale = Math.min(1, vw / DESIGN_WIDTH);
      setScale(nextScale);
      if (contentRef.current) {
        setScaledHeight(contentRef.current.offsetHeight * nextScale);
      }
    };
    update();
    window.addEventListener("resize", update);
    const ro = new ResizeObserver(update);
    if (contentRef.current) ro.observe(contentRef.current);
    return () => {
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, []);

  return { contentRef, scale, scaledHeight };
}

export default function Frame2136141531() {
  const { contentRef, scale, scaledHeight } = useScaleToFit();
  return (
    <div
      className="w-full bg-white relative overflow-x-hidden"
      style={scaledHeight ? { height: `${scaledHeight}px` } : undefined}
    >
    <div
      ref={contentRef}
      className="bg-white content-stretch flex flex-col gap-[80px] items-center px-[80px] pt-[100px] pb-0 w-[1440px] shrink-0 absolute top-0 left-1/2"
      style={{ transform: `translateX(-50%) scale(${scale})`, transformOrigin: "top center" }}
      data-node-id="1:374">
      <div className="content-stretch flex gap-[20px] items-end relative shrink-0 w-full" data-node-id="1:375">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[843px]" data-node-id="1:376">
          <div className="[word-break:break-word] content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:377">
            <p className="font-['Nunito_Sans'] font-extrabold leading-[80px] relative shrink-0 text-[#004cc9] text-[72px] w-full" data-node-id="1:378" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              Senior Product designer
            </p>
            <p className="font-['Nunito_Sans'] font-semibold leading-[34px] relative shrink-0 text-[#1e1e1e] text-[32px] w-full" data-node-id="1:379" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              Belykh Vera
            </p>
          </div>
          <div className="h-[479px] overflow-clip relative rounded-[20px] shrink-0 w-full" data-node-id="1:380">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgFrame2136141452} />
            <div className="absolute h-[740px] left-0 top-[-103px] w-[987px]" data-node-id="1:381" data-name="IMG_5449 1">
              <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={heroPortrait} />
            </div>
            <div className="absolute h-[310px] left-0 overflow-clip top-[169px] w-[843px]" data-node-id="1:382">
              <div aria-hidden className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none to-[rgba(22,88,194,0.6)]" />
              <div className="-translate-x-1/2 absolute content-stretch flex gap-[4px] items-center left-[calc(50%+0.5px)] top-[244px] w-[624px]" data-node-id="1:383">
                <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex flex-[1_0_0] flex-col items-center min-w-px overflow-clip px-[12px] py-[4px] relative rounded-[16px]" data-node-id="1:384">
                  <div className="[word-break:break-word] content-stretch flex flex-col items-center leading-[normal] relative shrink-0 text-white whitespace-nowrap" data-node-id="1:385">
                    <p className="font-['Nunito_Sans'] font-bold mb-[-4px] relative shrink-0 text-[20px]" data-node-id="1:386" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>{`5+ `}</p>
                    <p className="font-['Nunito_Sans'] font-semibold relative shrink-0 text-[14px]" data-node-id="1:387" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                      years of experience
                    </p>
                  </div>
                </div>
                <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex flex-[1_0_0] flex-col items-center min-w-px overflow-clip px-[12px] py-[4px] relative rounded-[16px]" data-node-id="1:388">
                  <div className="[word-break:break-word] content-stretch flex flex-col items-center leading-[normal] relative shrink-0 text-white whitespace-nowrap" data-node-id="1:389">
                    <p className="font-['Nunito_Sans'] font-bold mb-[-4px] relative shrink-0 text-[20px]" data-node-id="1:390" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                      3
                    </p>
                    <p className="font-['Nunito_Sans'] font-semibold relative shrink-0 text-[14px]" data-node-id="1:391" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                      major products
                    </p>
                  </div>
                </div>
                <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex flex-[1_0_0] flex-col items-center min-w-px overflow-clip px-[12px] py-[4px] relative rounded-[16px]" data-node-id="1:392">
                  <div className="[word-break:break-word] content-stretch flex flex-col items-center leading-[normal] relative shrink-0 text-white whitespace-nowrap" data-node-id="1:393">
                    <p className="font-['Nunito_Sans'] font-bold mb-[-4px] relative shrink-0 text-[20px]" data-node-id="1:394" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                      +15%
                    </p>
                    <p className="font-['Nunito_Sans'] font-semibold relative shrink-0 text-[14px]" data-node-id="1:395" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                      average check at Wildberries
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[417px]" data-node-id="1:396">
          <p className="[word-break:break-word] font-['Nunito_Sans'] font-normal italic leading-[24px] relative shrink-0 text-[#1e1e1e] text-[20px] w-full" data-node-id="1:397" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
            I design products that drive metric growth
            <br aria-hidden />
            —from research to launch
          </p>
          <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-node-id="1:398">
            <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative rounded-[12px]" data-node-id="1:399" data-name="🔷 Button / Center / Fill · Brand">
              <div className="bg-[#1e1e1e] hover:bg-[#3a3a3a] active:scale-[0.98] transition-all duration-200 ease-out cursor-pointer content-stretch flex flex-[1_0_0] gap-[var(----mo-SPx2,8px)] items-center justify-center min-h-[52px] min-w-px overflow-clip px-[var(----mo-SPx4,16px)] py-[var(----mo-SPx1,4px)] relative rounded-[16px]" data-node-id="I1:399;194333:25126" data-name="Button content">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I1:399;194333:25129" data-name="Content wrap">
                  <a className="[word-break:break-word] flex flex-col font-['Nunito_Sans'] font-bold justify-center leading-[0] relative shrink-0 text-[color:var(----mo-button-primary-content-primary-default,white)] text-[length:var(--font\/size\/action,17px)] text-center whitespace-nowrap" href="https://t.me/MsVera" data-node-id="I1:399;194333:25130" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }} target="_blank">
                    <p className="cursor-pointer leading-[var(--font\/line-height\/action,20px)]">Telegram</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative rounded-[12px] group" data-node-id="1:400" data-name="🔷 Button / Center / Fill · Brand">
              <div className="border-2 border-[#1e1e1e] border-solid hover:bg-[#1e1e1e] active:scale-[0.98] transition-all duration-200 ease-out cursor-pointer content-stretch flex flex-[1_0_0] gap-[var(----mo-SPx2,8px)] items-center justify-center min-h-[52px] min-w-px overflow-clip px-[var(----mo-SPx4,16px)] py-[var(----mo-SPx1,4px)] relative rounded-[16px]" data-node-id="1:401" data-name="Button content">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="1:404" data-name="Content wrap">
                  <a className="[word-break:break-word] flex flex-col font-['Nunito_Sans'] font-bold justify-center leading-[0] relative shrink-0 text-[#1e1e1e] group-hover:text-white transition-colors duration-200 text-[length:var(--font\/size\/action,17px)] text-center whitespace-nowrap" href="mailto:svera2000@mail.ru" data-node-id="1:405" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }} target="_blank">
                    <p className="cursor-pointer">
                      <span className="leading-[var(--font\/line-height\/action,20px)]">E</span>
                      <span className="leading-[var(--font\/line-height\/action,20px)]">-mail</span>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-node-id="1:409">
        <p className="[word-break:break-word] font-['Nunito_Sans'] font-semibold leading-[50px] relative shrink-0 text-[42px] text-black w-full" data-node-id="1:410" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
          Principles and Approach
        </p>
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="1:411">
          <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-node-id="1:412">
            <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(0,76,201,0.2)] gap-[8px] h-[392px] items-center overflow-clip p-[24px] relative rounded-[20px] shrink-0 to-[#004cc9] w-[630px]" data-node-id="1:413">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] relative shrink-0 text-[#1e1e1e] w-full" data-node-id="1:414">
                <p className="font-['Nunito_Sans'] font-bold relative shrink-0 text-[24px] w-full" data-node-id="1:415" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                  Data before pixels
                </p>
                <p className="font-['Nunito_Sans'] font-semibold relative shrink-0 text-[20px] w-full whitespace-pre-wrap" data-node-id="1:416" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                  {`I don't implement changes without a rationale: `}
                  <br aria-hidden />
                  {`hypothesis — research — A/B testing — decision `}
                  <br aria-hidden />
                  Design is an argument, not a matter of taste
                </p>
              </div>
              <div className="absolute h-[302.647px] left-[164px] overflow-clip top-[163px] w-[490px]" data-node-id="1:417" data-name="data_dashboard_english 1">
                <img alt="" className="absolute inset-0 max-w-none object-contain size-full" src={dashboardIllustration} />
              </div>
              <div className="-translate-x-1/2 absolute bg-gradient-to-b blur-[18.15px] from-[#205dbf] h-[87px] left-1/2 to-[#004cc9] top-[356px] w-[724px]" data-node-id="1:581" />
            </div>
            <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(0,76,201,0.2)] gap-[8px] h-[392px] items-center overflow-clip p-[24px] relative rounded-[20px] shrink-0 to-[#004cc9] w-[630px]" data-node-id="1:582">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] relative shrink-0 text-[#1e1e1e] w-full" data-node-id="1:583">
                <p className="font-['Nunito_Sans'] font-bold relative shrink-0 text-[24px] w-full" data-node-id="1:584" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                  Metrics and aesthetics—not a contradiction
                </p>
                <p className="font-['Nunito_Sans'] font-semibold relative shrink-0 text-[20px] w-full whitespace-pre-wrap" data-node-id="1:585" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                  I believe that a beautiful product sells better
                  <br aria-hidden />
                  {`I strike a balance between business goals `}
                  <br aria-hidden />
                  and high-quality visuals
                </p>
              </div>
              <div className="absolute content-stretch flex gap-[11px] items-center left-[146px] top-[311px]" data-node-id="1:586">
                <div className="bg-[#063994] content-stretch flex items-center justify-center overflow-clip px-[23px] py-[14px] relative rounded-[100px] shrink-0" data-node-id="1:587">
                  <p className="[word-break:break-word] font-['Nunito_Sans'] font-medium leading-[normal] relative shrink-0 text-[20px] text-white whitespace-nowrap" data-node-id="1:588" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                    Metrics first
                  </p>
                </div>
                <div className="border-2 border-[#a4a4a4] border-solid content-stretch flex items-center justify-center overflow-clip px-[23px] py-[14px] relative rounded-[100px] shrink-0" data-node-id="1:589">
                  <p className="[word-break:break-word] font-['Nunito_Sans'] font-medium leading-[normal] relative shrink-0 text-[20px] text-white whitespace-nowrap" data-node-id="1:590" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                    Visual quality
                  </p>
                </div>
                <div className="border-2 border-[#a4a4a4] border-solid content-stretch flex items-center justify-center overflow-clip px-[23px] py-[14px] relative rounded-[100px] shrink-0" data-node-id="1:591">
                  <p className="[word-break:break-word] font-['Nunito_Sans'] font-medium leading-[normal] relative shrink-0 text-[20px] text-white whitespace-nowrap" data-node-id="1:592" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>{`Conversion up `}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0 w-full" data-node-id="1:593">
            <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(0,76,201,0.2)] gap-[8px] h-[392px] items-center overflow-clip p-[24px] relative rounded-[20px] shrink-0 to-[#004cc9] w-[630px]" data-node-id="1:594">
              <div className="absolute left-[-12px] mix-blend-soft-light opacity-50 size-[642px] top-[-113px]" data-node-id="1:595" data-name="image 2090010108">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={listenToPeopleBg} />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] relative shrink-0 text-[#1e1e1e] w-full" data-node-id="1:596">
                <p className="font-['Nunito_Sans'] font-bold relative shrink-0 text-[24px] w-full" data-node-id="1:597" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                  I listen to people — I drive the product
                </p>
                <p className="font-['Nunito_Sans'] font-semibold relative shrink-0 text-[20px] w-full" data-node-id="1:598" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                  I quickly pinpoint the problem: the hallway test, the interview, and the flow analysis
                  <br aria-hidden />
                  Research is a tool, not a stage
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(0,76,201,0.2)] gap-[8px] h-[392px] items-center overflow-clip p-[24px] relative rounded-[20px] shrink-0 to-[#004cc9] w-[630px]" data-node-id="1:599">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] relative shrink-0 text-[#1e1e1e] w-full" data-node-id="1:600">
                <p className="font-['Nunito_Sans'] font-bold relative shrink-0 text-[24px] w-full" data-node-id="1:601" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                  Systems thinking in Figma
                </p>
                <p className="font-['Nunito_Sans'] font-semibold relative shrink-0 text-[20px] w-full" data-node-id="1:602" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                  Design systems, complex components, auto-layout
                  <br aria-hidden />I save the team a lot of time
                </p>
              </div>
              <div className="absolute h-[340.826px] left-[211px] overflow-clip top-[136px] w-[603px]" data-node-id="1:603" data-name="keyboard_shift_a_blue 1">
                <img alt="" className="absolute inset-0 max-w-none object-contain size-full" src={keyboardIllustration} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-node-id="1:707">
        <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="1:708">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Nunito_Sans'] font-semibold leading-[70px] min-w-px relative text-[#1e1e1e] text-[64px]" data-node-id="1:709" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
            Cases
          </p>
        </div>
        <div className="h-0 shrink-0 w-full relative" data-node-id="1:710">
          <div className="absolute inset-[-0.5px_0]">
            <img alt="" className="block max-w-none size-full" src={imgVector45} />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[1280px]" data-node-id="1:711">
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:712">
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Nunito_Sans'] font-semibold gap-[2px] items-start relative shrink-0 whitespace-nowrap" data-node-id="1:713">
            <p className="leading-[50px] relative shrink-0 text-[42px] text-black" data-node-id="1:714" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              Checkout
            </p>
            <p className="leading-[30px] relative shrink-0 text-[#878787] text-[24px]" data-node-id="1:715" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              WILDBERRIES RIV GOSH
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[44px] items-center relative shrink-0 w-full" data-node-id="1:716">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[#1e1e1e] w-full" data-node-id="1:717">
            <p className="font-['Nunito_Sans'] font-semibold leading-[32px] relative shrink-0 text-[28px] w-full" data-node-id="1:718" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              Task:
            </p>
            <p className="font-['Nunito_Sans'] font-normal italic leading-[24px] relative shrink-0 text-[20px] w-full" data-node-id="1:719" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              The five-step order process, spread across several screens, created barriers for users—a long process, many clicks, and a high drop-off rate during the data entry stage
            </p>
          </div>
          <div className="bg-[rgba(0,76,201,0.2)] flex gap-[44px] items-start justify-center pb-[40px] pt-[24px] px-[80px] shrink-0 rounded-[32px]" data-node-id="1:720">
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-node-id="1:721">
              <p className="[word-break:break-word] font-['Nunito_Sans'] font-bold leading-[normal] min-w-full relative shrink-0 text-[#1e1e1e] text-[20px] w-[min-content]" data-node-id="1:722" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                How it was
              </p>
              <div className="h-[485px] relative shrink-0 w-[860.556px]" data-node-id="1:723">
                <div className="absolute flex h-[453.062px] items-center justify-center left-[551.06px] top-[35.83px] w-[270.389px]" data-node-id="1:724">
                  <div className="flex-none rotate-10">
                    <div className="h-[424.848px] relative rounded-[15.954px] w-[199.648px]" data-name="image 2090010098">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[15.954px]">
                        <img alt="" className="absolute h-[101.43%] left-[-0.02%] max-w-none top-[-0.48%] w-[101.37%]" src={checkoutCollage5} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex h-[438.617px] items-center justify-center left-[415.16px] top-[7.06px] w-[228.324px]" data-node-id="1:725">
                  <div className="flex-none rotate-5">
                    <div className="h-[423.482px] relative rounded-[15.954px] shadow-[0px_-1.952px_7.806px_0px_rgba(0,0,0,0.1)] w-[192.146px]" data-name="image 2090010097">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[15.954px]">
                        <img alt="" className="absolute h-[101.93%] left-0 max-w-none top-[-0.97%] w-[101.56%]" src={checkoutCollage4} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex h-[449.459px] items-center justify-center left-0 top-[38.44px] w-[266.009px]" data-node-id="1:726">
                  <div className="-rotate-10 flex-none">
                    <div className="h-[421.881px] relative rounded-[15.954px] w-[195.723px]" data-name="image 2090010094">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[15.954px]">
                        <img alt="" className="absolute h-[100.42%] left-[-1.66%] max-w-none top-[-0.42%] w-[101.66%]" src={checkoutCollage1} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex h-[438.879px] items-center justify-center left-[171.21px] top-[7.13px] w-[231.319px]" data-node-id="1:727">
                  <div className="-rotate-5 flex-none">
                    <div className="h-[423.482px] relative rounded-[15.954px] shadow-[0px_1.952px_7.806px_0px_rgba(0,0,0,0.1)] w-[195.153px]" data-name="image 2090010095">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[15.954px]">
                        <img alt="" className="absolute h-[99.81%] left-0 max-w-none top-[0.1%] w-full" src={checkoutCollage2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[423.073px] left-[310.81px] rounded-[15.954px] shadow-[0px_1.952px_7.806px_0px_rgba(0,0,0,0.1)] top-[3.9px] w-[195.342px]" data-node-id="1:728" data-name="image 2090010096">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[15.954px] size-full" src={checkoutCollage3} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[215.444px]" data-node-id="1:729">
              <p className="[word-break:break-word] font-['Nunito_Sans'] font-bold leading-[normal] relative shrink-0 text-[#1e1e1e] text-[20px] w-full" data-node-id="1:730" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                As it turned out
              </p>
              <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="1:731">
                <div className="h-[485px] relative rounded-[16px] shrink-0 w-[220px]" data-node-id="1:732" data-name="image 2090010094">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
                    <img alt="" className="absolute h-[100.55%] left-[-1.66%] max-w-none top-[-0.51%] w-[103.31%]" src={checkoutTurned} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[1280px]" data-node-id="checkout-process">
        <p className="font-['Nunito_Sans'] font-semibold text-[32px] text-black w-full">
          The Process
        </p>
        <div className="flex flex-col gap-[28px] w-full">
          <div className="flex flex-col gap-[6px]">
            <p className="font-['Nunito_Sans'] font-bold text-[19px] text-[#1e1e1e]">
              1. The problem
            </p>
            <p className="font-['Nunito_Sans'] font-semibold text-[16px] leading-[22px] text-[#1e1e1e]">
              The original checkout spread across 5 steps, and users had to manually
              re-enter contact and delivery details even when that data already
              existed in their profile. Drop-off was concentrated right at the
              data-entry stage — the last point before conversion.
            </p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className="font-['Nunito_Sans'] font-bold text-[19px] text-[#1e1e1e]">
              2. Hypothesis
            </p>
            <p className="font-['Nunito_Sans'] font-semibold text-[16px] leading-[22px] text-[#1e1e1e]">
              Checkout is the last step of the funnel, so it needs to feel fast and
              adaptive. If we removed redundant data entry — auto-filling saved
              name, phone, email, and delivery address — and let the payment method
              default to whatever was already linked, completion should improve,
              leaving the user with essentially one active decision instead of five.
            </p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className="font-['Nunito_Sans'] font-bold text-[19px] text-[#1e1e1e]">
              3. Discovery
            </p>
            <p className="font-['Nunito_Sans'] font-semibold text-[16px] leading-[22px] text-[#1e1e1e]">
              Two parallel tracks: a competitive audit of how major marketplaces
              structure checkout, and direct user research — hallway-style
              interviews and observation during checkout. The competitive audit
              alone wasn't conclusive: not every competitor uses a single-step
              flow. It was the user research that made the direction clear —
              people completed purchases with more confidence the fewer manual
              inputs they had to handle.
            </p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className="font-['Nunito_Sans'] font-bold text-[19px] text-[#1e1e1e]">
              4. Alternative considered
            </p>
            <p className="font-['Nunito_Sans'] font-semibold text-[16px] leading-[22px] text-[#1e1e1e]">
              Before committing, I weighed staying closer to the multi-step
              pattern several competitors use — breaking checkout into discrete
              stages — against consolidating everything into one adaptive page
              that pre-fills known data. Competitor precedent didn't settle it on
              its own; combined with the interview findings, the single-page,
              autofill-first approach was the stronger case.
            </p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className="font-['Nunito_Sans'] font-bold text-[19px] text-[#1e1e1e]">
              5. Solution
            </p>
            <p className="font-['Nunito_Sans'] font-semibold text-[16px] leading-[22px] text-[#1e1e1e]">
              The redesigned checkout collapses the flow to effectively one step:
              saved contact and delivery details are pre-filled automatically,
              and an already-linked payment method is pre-selected — leaving the
              user with a single active decision instead of five sequential ones.
            </p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className="font-['Nunito_Sans'] font-bold text-[19px] text-[#1e1e1e]">
              6. Result
            </p>
            <p className="font-['Nunito_Sans'] font-semibold text-[16px] leading-[22px] text-[#1e1e1e]">
              Drop-off at the data-entry stage decreased, and the path from cart
              to a paid order became noticeably shorter.
            </p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className="font-['Nunito_Sans'] font-bold text-[19px] text-[#1e1e1e]">
              7. What I'd do differently
            </p>
            <p className="font-['Nunito_Sans'] font-semibold text-[16px] leading-[22px] text-[#1e1e1e]">
              I'd set up a formal A/B test of the single-page flow against the
              multi-step pattern from the start, rather than relying mainly on
              qualitative interviews to validate the direction — that would have
              given a cleaner, quantified read on the impact before full rollout.
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[1280px]" data-node-id="1:733">
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:734">
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Nunito_Sans'] font-semibold gap-[2px] items-start relative shrink-0 whitespace-nowrap" data-node-id="1:735">
            <p className="leading-[50px] relative shrink-0 text-[42px] text-black" data-node-id="1:736" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              Gift card
            </p>
            <p className="leading-[30px] relative shrink-0 text-[#878787] text-[24px]" data-node-id="1:737" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              WILDBERRIES RIV GOSH
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[44px] items-center relative shrink-0 w-full" data-node-id="1:738">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[#1e1e1e] w-full" data-node-id="1:739">
            <p className="font-['Nunito_Sans'] font-semibold leading-[32px] relative shrink-0 text-[28px] w-full" data-node-id="1:740" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              Task:
            </p>
            <p className="font-['Nunito_Sans'] font-normal italic leading-[24px] relative shrink-0 text-[20px] w-full" data-node-id="1:741" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              Outdated gift card section: 5-step checkout process, outdated UI, high bounce rate
              <br aria-hidden />
              We needed to completely redesign the section and increase purchase conversion
            </p>
          </div>
          <div className="bg-[rgba(0,76,201,0.2)] flex flex-col gap-[44px] items-start pb-[40px] pt-[24px] px-[80px] w-full shrink-0 rounded-[32px]" data-node-id="1:742">
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="1:743">
              <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex flex-[1_0_0] flex-col items-center min-w-px overflow-clip p-[12px] relative rounded-[16px]" data-node-id="1:744">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] relative shrink-0 text-[#1e1e1e] w-full" data-node-id="1:745">
                  <p className="font-['Nunito_Sans'] font-bold relative shrink-0 text-[20px] w-full" data-node-id="1:746" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>{`Purchase path: 5 — 2 `}</p>
                  <p className="font-['Nunito_Sans'] font-semibold relative shrink-0 text-[16px] w-full whitespace-pre-wrap" data-node-id="1:747" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                    {`I completely redesigned the flow:  removed unnecessary screens and combined the steps`}
                    <br aria-hidden />
                    The user can now create a gift card in 2 steps instead of 5
                  </p>
                </div>
              </div>
              <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex flex-[1_0_0] flex-col items-center min-w-px overflow-clip p-[12px] relative rounded-[16px]" data-node-id="1:748">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start relative shrink-0 text-[#1e1e1e] w-full" data-node-id="1:749">
                  <p className="font-['Nunito_Sans'] font-bold leading-[normal] relative shrink-0 text-[20px] w-full" data-node-id="1:750" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                    Purchase History
                  </p>
                  <div className="font-['Nunito_Sans'] font-semibold leading-[0] relative shrink-0 text-[16px] w-full" data-node-id="1:751" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                    <p className="leading-[normal] mb-0">Added a "History" section—users can view their purchased cards, their status, and their balance</p>
                    <p className="leading-[normal]">Builds trust and encourages repeat purchases</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="1:752">
                <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex flex-[1_0_0] flex-col h-full items-center min-w-px overflow-clip p-[12px] relative rounded-[16px]">
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] relative shrink-0 text-[#1e1e1e] w-full" data-node-id="1:753">
                    <p className="font-['Nunito_Sans'] font-bold relative shrink-0 text-[20px] w-full" data-node-id="1:754" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                      Additional points of sale
                    </p>
                    <p className="font-['Nunito_Sans'] font-semibold relative shrink-0 text-[16px] w-full whitespace-pre-wrap" data-node-id="1:755" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                      {`Implemented additional entry points `}
                      <br aria-hidden />
                      {`to the gift card section within the app — increased the product's reach and visibility`}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="1:756">
                <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex flex-[1_0_0] flex-col h-full items-center min-w-px overflow-clip p-[12px] relative rounded-[16px]">
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] relative shrink-0 text-[#1e1e1e] w-full" data-node-id="1:757">
                    <p className="font-['Nunito_Sans'] font-bold relative shrink-0 text-[20px] w-full" data-node-id="1:758" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                      Modern UI
                    </p>
                    <p className="font-['Nunito_Sans'] font-semibold relative shrink-0 text-[16px] w-full" data-node-id="1:759" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>{`I updated the section's visual style: typography, components, and animations. The section now looks fresh and engaging.`}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:760">
              <p className="[word-break:break-word] font-['Nunito_Sans'] font-bold leading-[normal] relative shrink-0 text-[#1e1e1e] text-[20px] w-full" data-node-id="1:761" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                How it was
              </p>
              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="1:762">
                <div className="h-[467.679px] relative rounded-[15.429px] shadow-[0px_0.964px_7.714px_0px_rgba(0,76,201,0.15)] shrink-0 w-[212.143px]" data-node-id="1:763" data-name="image 2090010094">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[15.429px] size-full" src={giftcardHow1} />
                </div>
                <div className="h-[468.72px] relative rounded-[15.429px] shadow-[0px_0.964px_7.714px_0px_rgba(0,76,201,0.15)] shrink-0 w-[216px]" data-node-id="1:764" data-name="image 2090010095">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[15.429px] size-full" src={giftcardHow2} />
                </div>
                <div className="h-[467.679px] relative rounded-[15.429px] shadow-[0px_0.964px_7.714px_0px_rgba(0,76,201,0.15)] shrink-0 w-[216px]" data-node-id="1:765" data-name="image 2090010096">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[15.429px] size-full" src={giftcardHow3} />
                </div>
                <div className="h-[467.679px] relative rounded-[15.429px] shadow-[0px_0.964px_7.714px_0px_rgba(0,76,201,0.15)] shrink-0 w-[212.143px]" data-node-id="1:766" data-name="image 2090010097">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[15.429px] size-full" src={giftcardHow4} />
                </div>
                <div className="h-[467.679px] relative rounded-[15.429px] shadow-[0px_0.964px_7.714px_0px_rgba(0,76,201,0.15)] shrink-0 w-[212.143px]" data-node-id="1:767" data-name="image 2090010098">
                  <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[15.429px]">
                    <div className="absolute inset-0 overflow-hidden rounded-[15.429px]">
                      <img alt="" className="absolute h-[101.43%] left-[-0.02%] max-w-none top-[-0.48%] w-[100.04%]" src={checkoutCollage5} />
                    </div>
                    <img alt="" className="absolute max-w-none object-cover rounded-[15.429px] size-full" src={giftcardHow5Overlay} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:768">
              <p className="[word-break:break-word] font-['Nunito_Sans'] font-bold leading-[normal] relative shrink-0 text-[#1e1e1e] text-[20px] w-full" data-node-id="1:769" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                As it turned out
              </p>
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="1:770">
                <div className="h-[467.679px] relative rounded-[15.429px] shadow-[0px_0.964px_7.714px_0px_rgba(0,76,201,0.15)] shrink-0 w-[216.964px]" data-node-id="1:771" data-name="image 2090010094">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
                    <img alt="" className="absolute h-full left-[-0.02%] max-w-none top-[0.12%] w-[99.61%]" src={giftcardTurned1} />
                  </div>
                </div>
                <div className="h-[468.72px] relative rounded-[15.429px] shadow-[0px_0.964px_7.714px_0px_rgba(0,76,201,0.15)] shrink-0 w-[216px]" data-node-id="1:772" data-name="image 2090010095">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[15.429px] size-full" src={giftcardTurned2} />
                </div>
                <div className="h-[469.728px] relative rounded-[15.429px] shadow-[0px_0.964px_7.714px_0px_rgba(0,76,201,0.15)] shrink-0 w-[216.964px]" data-node-id="1:773" data-name="image 2090010096">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[15.429px] size-full" src={giftcardTurned3} />
                </div>
                <div className="h-[467.679px] relative rounded-[15.429px] shadow-[0px_0.964px_7.714px_0px_rgba(0,76,201,0.15)] shrink-0 w-[216.964px]" data-node-id="1:774" data-name="image 2090010097">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[15.429px]">
                    <img alt="" className="absolute h-full left-[0.2%] max-w-none top-[0.03%] w-[99.61%]" src={giftcardTurned4} />
                  </div>
                </div>
                <div className="h-[467.679px] relative rounded-[15.429px] shadow-[0px_0.964px_7.714px_0px_rgba(0,76,201,0.15)] shrink-0 w-[216px]" data-node-id="1:775" data-name="image 2090010098">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[15.429px]">
                    <img alt="" className="absolute h-full left-[-0.02%] max-w-none top-0 w-[100.05%]" src={giftcardTurned5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[1280px]" data-node-id="1:776">
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:777">
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Nunito_Sans'] font-semibold gap-[2px] items-start relative shrink-0 whitespace-nowrap" data-node-id="1:778">
            <p className="leading-[50px] relative shrink-0 text-[42px] text-black" data-node-id="1:779" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              Travel
            </p>
            <p className="leading-[30px] relative shrink-0 text-[#878787] text-[24px]" data-node-id="1:780" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              WILDBERRIES
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[44px] items-center relative shrink-0 w-full" data-node-id="1:781">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[#1e1e1e] w-full" data-node-id="1:782">
            <p className="font-['Nunito_Sans'] font-semibold leading-[32px] relative shrink-0 text-[28px] w-full" data-node-id="1:783" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              My role:
            </p>
            <div className="font-['Nunito_Sans'] font-normal italic leading-[0] relative shrink-0 text-[20px] w-full" data-node-id="1:784" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              <p className="leading-[24px] mb-0">
                The sole designer for the aviation division
                <br aria-hidden />
                Full cycle: from research to launch
              </p>
              <p className="leading-[24px]">Served as both product manager and design lead — coordinating tasks, managing priorities, and onboarding new employees</p>
            </div>
          </div>
          <div className="bg-[rgba(0,76,201,0.2)] flex flex-col gap-[44px] items-start pb-[40px] pt-[24px] px-[80px] w-full shrink-0 rounded-[32px]" data-node-id="1:785">
            <div className="content-stretch flex gap-[16px] items-stretch relative shrink-0 w-full" data-node-id="1:786">
              <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex flex-[1_0_0] flex-col h-full items-center min-w-px overflow-clip p-[12px] relative rounded-[16px]" data-node-id="1:787">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start relative shrink-0 text-[#1e1e1e] w-full" data-node-id="1:788">
                  <p className="font-['Nunito_Sans'] font-bold leading-[normal] relative shrink-0 text-[20px] w-full" data-node-id="1:789" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                    Additional Services When Booking
                  </p>
                  <div className="font-['Nunito_Sans'] font-semibold leading-[0] relative shrink-0 text-[16px] w-full" data-node-id="1:790" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                    <p className="leading-[normal] mb-0">Seat selection, extra baggage, insurance – new sales opportunities within the booking flow</p>
                    <p className="leading-[normal]">Result: +15% increase in average transaction value</p>
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex flex-[1_0_0] flex-col h-full items-center min-w-px overflow-clip p-[12px] relative rounded-[16px]" data-node-id="1:791">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] relative shrink-0 text-[#1e1e1e] w-full" data-node-id="1:792">
                  <p className="font-['Nunito_Sans'] font-bold relative shrink-0 text-[20px] w-full" data-node-id="1:793" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                    Search Calendar with Prices
                  </p>
                  <p className="font-['Nunito_Sans'] font-semibold relative shrink-0 text-[16px] w-full" data-node-id="1:794" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                    {`Optimized the calendar's UX + added price display`}
                    <br aria-hidden />
                    Users select a date and immediately see the price—fewer steps, faster decision-making
                  </p>
                </div>
              </div>
              <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex flex-[1_0_0] flex-col h-full items-center min-w-px overflow-clip p-[12px] relative rounded-[16px]" data-node-id="1:795">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] relative shrink-0 text-[#1e1e1e] w-full" data-node-id="1:796">
                  <p className="font-['Nunito_Sans'] font-bold relative shrink-0 text-[20px] w-full" data-node-id="1:797" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                    Reservation Statuses
                  </p>
                  <p className="font-['Nunito_Sans'] font-semibold relative shrink-0 text-[16px] w-full" data-node-id="1:798" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                    Users always know the status of their orders. By implementing a status system, we reduced the workload on customer support and increased trust in the product
                  </p>
                </div>
              </div>
              <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex flex-[1_0_0] flex-col h-full items-center min-w-px overflow-clip p-[12px] relative rounded-[16px]" data-node-id="1:799">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] relative shrink-0 text-[#1e1e1e] w-full" data-node-id="1:800">
                  <p className="font-['Nunito_Sans'] font-bold relative shrink-0 text-[20px] w-full" data-node-id="1:801" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                    Migration to the design system
                  </p>
                  <p className="font-['Nunito_Sans'] font-semibold relative shrink-0 text-[16px] w-full" data-node-id="1:802" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                    Migrated the booking and payment stages to a unified design system: Consistent UI, faster development, and consistency with WB's core products
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[44px] items-center relative shrink-0" data-node-id="1:803">
              <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-node-id="1:804">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:805">
                  <p className="[word-break:break-word] font-['Nunito_Sans'] font-bold leading-[normal] relative shrink-0 text-[#1e1e1e] text-[20px] whitespace-nowrap" data-node-id="1:806" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                    Additional services
                  </p>
                </div>
                <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" data-node-id="1:807">
                  <div className="h-[476px] relative rounded-[16px] shadow-[0px_1px_8px_0px_rgba(0,76,201,0.15)] shrink-0 w-[220px]" data-node-id="1:808" data-name="image 2090010087">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={travelService1} />
                  </div>
                  <div className="h-[476px] relative rounded-[16px] shadow-[0px_1px_8px_0px_rgba(0,76,201,0.15)] shrink-0 w-[220px]" data-node-id="1:809" data-name="image 2090010088">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={travelService2} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-node-id="1:810">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:811">
                  <p className="[word-break:break-word] font-['Nunito_Sans'] font-bold leading-[normal] relative shrink-0 text-[#1e1e1e] text-[20px] whitespace-nowrap" data-node-id="1:812" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                    Search calendar with prices
                  </p>
                </div>
                <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" data-node-id="1:813">
                  <div className="h-[476px] relative rounded-[16px] shadow-[0px_1px_8px_0px_rgba(0,76,201,0.15)] shrink-0 w-[220px]" data-node-id="1:814" data-name="image 2090010087">
                    <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[16px]">
                      <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={travelService1} />
                      <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgImage2090010089} />
                    </div>
                  </div>
                  <div className="h-[476px] relative rounded-[16px] shadow-[0px_1px_8px_0px_rgba(0,76,201,0.15)] shrink-0 w-[220px]" data-node-id="1:815" data-name="image 2090010088">
                    <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[16px]">
                      <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={travelService2} />
                      <div className="absolute inset-0 overflow-hidden rounded-[16px]">
                        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage2090010090} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[44px] items-center relative shrink-0" data-node-id="1:816">
              <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-node-id="1:817">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:818">
                  <p className="[word-break:break-word] font-['Nunito_Sans'] font-bold leading-[normal] relative shrink-0 text-[#1e1e1e] text-[20px] whitespace-nowrap" data-node-id="1:819" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                    Reservation statuses
                  </p>
                </div>
                <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:820">
                  <div className="h-[222px] relative rounded-[13.214px] shadow-[0px_1px_8px_0px_rgba(0,76,201,0.15)] shrink-0 w-[452px]" data-node-id="1:821" data-name="image 2090010089">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[13.214px]">
                      <img alt="" className="absolute h-[152.73%] left-0 max-w-none top-0 w-full" src={travelReservation1} />
                    </div>
                  </div>
                  <div className="aspect-[2002/644] relative rounded-[13.214px] shadow-[0px_1px_8px_0px_rgba(0,76,201,0.15)] shrink-0 w-full" data-node-id="1:822" data-name="image 2090010090">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13.214px] size-full" src={travelReservation2} />
                  </div>
                  <div className="aspect-[2002/644] relative rounded-[13.214px] shadow-[0px_1px_8px_0px_rgba(0,76,201,0.15)] shrink-0 w-full" data-node-id="1:823" data-name="image 2090010091">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13.214px] size-full" src={travelReservation3} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-node-id="1:824">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:825">
                  <p className="[word-break:break-word] font-['Nunito_Sans'] font-bold leading-[normal] relative shrink-0 text-[#1e1e1e] text-[20px] whitespace-nowrap" data-node-id="1:826" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                    Migration to a design system
                  </p>
                </div>
                <div className="h-[568px] relative rounded-[11.193px] shadow-[0px_1px_8px_0px_rgba(0,76,201,0.15)] shrink-0 w-[375px]" data-node-id="1:827" data-name="image 2090010093">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[11.193px] size-full" src={travelMigration} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-node-id="1:828">
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:829">
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Nunito_Sans'] font-semibold gap-[2px] items-start relative shrink-0 whitespace-nowrap" data-node-id="1:830">
            <p className="leading-[50px] relative shrink-0 text-[42px] text-black" data-node-id="1:831" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              UX Research and JTBD
            </p>
            <p className="leading-[30px] relative shrink-0 text-[#878787] text-[24px]" data-node-id="1:832" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              Santehnika-online
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="1:833">
          <div className="[word-break:break-word] content-stretch flex gap-[12px] items-start justify-center relative shrink-0 text-[#ccdbf4] w-full" data-node-id="1:834">
            <div className="bg-[#1e1e1e] content-stretch flex flex-col items-center justify-center overflow-clip p-[12px] relative rounded-[16px] self-stretch shrink-0 w-[300px]" data-node-id="1:835">
              <div className="flex flex-col font-['Nunito_Sans'] font-black justify-center leading-[0] min-w-full relative shrink-0 text-[56px] text-center w-[min-content]" data-node-id="1:836" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                <p className="leading-[58px]">30</p>
              </div>
              <p className="font-['Nunito_Sans'] font-normal italic leading-[24px] relative shrink-0 text-[20px] whitespace-nowrap" data-node-id="1:837" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                in-depth interviews
              </p>
            </div>
            <div className="bg-[#1e1e1e] content-stretch flex flex-col items-center justify-center overflow-clip p-[12px] relative rounded-[16px] self-stretch shrink-0 w-[300px]" data-node-id="1:838">
              <div className="flex flex-col font-['Nunito_Sans'] font-black justify-center leading-[0] min-w-full relative shrink-0 text-[56px] text-center w-[min-content]" data-node-id="1:839" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                <p className="leading-[58px]">6</p>
              </div>
              <p className="font-['Nunito_Sans'] font-normal italic leading-[24px] relative shrink-0 text-[20px] whitespace-nowrap" data-node-id="1:840" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                research methods
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[1280px]" data-node-id="1:841">
            <div className="bg-[rgba(0,76,201,0.2)] content-stretch flex flex-[1_0_0] flex-col items-center min-w-px overflow-clip p-[12px] relative rounded-[16px]" data-node-id="1:842">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] relative shrink-0 text-[#1e1e1e] w-full" data-node-id="1:843">
                <p className="font-['Nunito_Sans'] font-bold relative shrink-0 text-[20px] w-full" data-node-id="1:844" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>{`Identify the user's pain point`}</p>
                <p className="font-['Nunito_Sans'] font-semibold relative shrink-0 text-[16px] w-full whitespace-pre-wrap" data-node-id="1:845" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                  {`30 in-person interviews revealed real barriers `}
                  <br aria-hidden />
                  to purchasing and unmet needs that were not apparent in the analytics
                </p>
              </div>
            </div>
            <div className="bg-[rgba(0,76,201,0.2)] content-stretch flex flex-[1_0_0] flex-col items-center min-w-px overflow-clip p-[12px] relative rounded-[16px]" data-node-id="1:846">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] relative shrink-0 text-[#1e1e1e] w-full" data-node-id="1:847">
                <p className="font-['Nunito_Sans'] font-bold relative shrink-0 text-[20px] w-full" data-node-id="1:848" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                  Before development begins
                </p>
                <p className="font-['Nunito_Sans'] font-semibold relative shrink-0 text-[16px] w-full" data-node-id="1:849" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                  I tested the prototypes on users before the development team took over the task. We redesigned the navigation to align with people's mental models.
                </p>
              </div>
            </div>
            <div className="bg-[rgba(0,76,201,0.2)] content-stretch flex flex-[1_0_0] flex-col items-center min-w-px overflow-clip p-[12px] relative rounded-[16px]" data-node-id="1:850">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] relative shrink-0 text-[#1e1e1e] w-full" data-node-id="1:851">
                <p className="font-['Nunito_Sans'] font-bold relative shrink-0 text-[20px] w-full" data-node-id="1:852" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                  After launch
                </p>
                <p className="font-['Nunito_Sans'] font-semibold relative shrink-0 text-[16px] w-full whitespace-pre-wrap" data-node-id="1:853" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                  {`I identified pain points after launch `}
                  <br aria-hidden />
                  {`Systematic collection of feedback has become part `}
                  <br aria-hidden />
                  of the workflow
                </p>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start relative shrink-0 text-[#1e1e1e] w-full" data-node-id="1:854">
            <p className="font-['Nunito_Sans'] font-semibold leading-[32px] relative shrink-0 text-[28px] w-full" data-node-id="1:855" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              Result:
            </p>
            <p className="font-['Nunito_Sans'] font-normal italic leading-[24px] relative shrink-0 text-[20px] w-full" data-node-id="1:856" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              {`I optimized the funnel—I eliminated friction points that weren't apparent without a structural analysis`}
              <br aria-hidden />
              The analysis served as a basis for discussion with the team, rather than just a formality
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[42px] items-start relative shrink-0 w-full" data-node-id="1:857">
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:858">
          <p className="[word-break:break-word] font-['Nunito_Sans'] font-semibold leading-[50px] relative shrink-0 text-[42px] text-black whitespace-nowrap" data-node-id="1:859" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
            Experience and Growth
          </p>
        </div>
        <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-node-id="1:860">
          <div className="h-[531px] relative shrink-0 w-[24px]" data-node-id="1:861">
            <div className="absolute flex h-[531px] items-center justify-center left-[10px] top-0 w-0" data-node-id="1:862">
              <div className="flex-none rotate-90">
                <div className="h-0 relative w-[531px]">
                  <div className="absolute inset-[-4px_0_0_0]">
                    <img alt="" className="block max-w-none size-full" src={imgLine1} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute border border-[#004cc9] border-solid content-stretch flex items-start left-0 p-[2px] rounded-[100px] size-[24px] top-[16px]" data-node-id="1:863">
              <div className="bg-[#004cc9] relative rounded-[200px] shrink-0 size-[20px]" data-node-id="1:864" />
            </div>
            <div className="absolute border border-[#004cc9] border-solid content-stretch flex items-start left-0 p-[2px] rounded-[100px] size-[24px] top-[136px]" data-node-id="1:865">
              <div className="bg-[#004cc9] relative rounded-[200px] shrink-0 size-[20px]" data-node-id="1:866" />
            </div>
            <div className="absolute content-stretch flex items-start left-0 p-[2px] rounded-[100px] size-[24px] top-[236px]" data-node-id="1:867">
              <div className="bg-[#6693de] relative rounded-[200px] shrink-0 size-[20px]" data-node-id="1:868" />
            </div>
            <div className="absolute content-stretch flex items-start left-0 p-[2px] rounded-[100px] size-[24px] top-[336px]" data-node-id="1:869">
              <div className="bg-[#6693de] relative rounded-[200px] shrink-0 size-[20px]" data-node-id="1:870" />
            </div>
            <div className="absolute content-stretch flex items-start left-0 p-[2px] rounded-[100px] size-[24px] top-[436px]" data-node-id="1:871">
              <div className="bg-[#6693de] relative rounded-[200px] shrink-0 size-[20px]" data-node-id="1:872" />
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[799px]" data-node-id="1:873">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-node-id="1:874">
              <p className="font-['Nunito_Sans'] font-normal italic leading-[16px] min-w-full relative shrink-0 text-[#878787] text-[12px] w-[min-content]" data-node-id="1:875" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                April 2026 – present
              </p>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:876">
                <p className="font-['Nunito_Sans'] font-semibold leading-[24px] relative shrink-0 text-[#1e1e1e] text-[20px] w-full" data-node-id="1:877" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                  Wildberries × RIV GOSH
                </p>
                <p className="font-['Nunito_Sans'] font-extrabold leading-[20px] relative shrink-0 text-[#004cc9] text-[16px] w-full" data-node-id="1:878" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                  Senior Product Designer
                </p>
              </div>
              <p className="font-['Nunito_Sans'] font-normal italic leading-[20px] relative shrink-0 text-[#1e1e1e] text-[16px] w-[585px]" data-node-id="1:879" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                Checkout Optimization, Redesign of the Gift Card Section
                <br aria-hidden />
                Focus on Conversions and UX
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="1:880">
              <p className="font-['Nunito_Sans'] font-normal italic leading-[16px] relative shrink-0 text-[#878787] text-[12px] w-full" data-node-id="1:881" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                January 2025 – April 2026
              </p>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:882">
                <p className="font-['Nunito_Sans'] font-semibold leading-[24px] relative shrink-0 text-[#1e1e1e] text-[20px] w-full" data-node-id="1:883" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                  Wildberries Travel
                </p>
                <p className="font-['Nunito_Sans'] font-extrabold leading-[20px] relative shrink-0 text-[#004cc9] text-[16px] w-full" data-node-id="1:884" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                  Senior Product Designer
                </p>
              </div>
              <p className="font-['Nunito_Sans'] font-normal italic leading-[20px] relative shrink-0 text-[#1e1e1e] text-[16px] w-full" data-node-id="1:885" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                +15% average check
                <br aria-hidden />
                Air travel: reservations, additional services, design system
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="1:886">
              <p className="font-['Nunito_Sans'] font-normal italic leading-[16px] relative shrink-0 text-[#878787] text-[12px] w-full" data-node-id="1:887" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                June 2023 – January 2025
              </p>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:888">
                <p className="font-['Nunito_Sans'] font-semibold leading-[24px] relative shrink-0 text-[#1e1e1e] text-[20px] w-full" data-node-id="1:889" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                  Santehnika-online
                </p>
                <p className="font-['Nunito_Sans'] font-extrabold leading-[20px] relative shrink-0 text-[#004cc9] text-[16px] w-full" data-node-id="1:890" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                  Product Designer
                </p>
              </div>
              <p className="font-['Nunito_Sans'] font-normal italic leading-[20px] relative shrink-0 text-[#1e1e1e] text-[16px] w-full" data-node-id="1:891" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                Full cycle: JTBD, UX research, A/B testing, funnel optimization
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="1:892">
              <p className="font-['Nunito_Sans'] font-normal italic leading-[16px] relative shrink-0 text-[#878787] text-[12px] w-full" data-node-id="1:893" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                December 2022 — June 2023
              </p>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:894">
                <p className="font-['Nunito_Sans'] font-semibold leading-[24px] relative shrink-0 text-[#1e1e1e] text-[20px] w-full" data-node-id="1:895" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                  Planet for me
                </p>
                <p className="font-['Nunito_Sans'] font-extrabold leading-[20px] relative shrink-0 text-[#004cc9] text-[16px] w-full" data-node-id="1:896" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                  Middle UX/UI Designer
                </p>
              </div>
              <p className="font-['Nunito_Sans'] font-normal italic leading-[20px] relative shrink-0 text-[#1e1e1e] text-[16px] w-full" data-node-id="1:897" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                Web and iOS/Android mobile apps. Implementing a design system in Figma
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="1:898">
              <p className="font-['Nunito_Sans'] font-normal italic leading-[16px] relative shrink-0 text-[#878787] text-[12px] w-full" data-node-id="1:899" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                December 2021 – May 2022
              </p>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:900">
                <p className="font-['Nunito_Sans'] font-semibold leading-[24px] relative shrink-0 text-[#1e1e1e] text-[20px] w-full" data-node-id="1:901" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                  EcoManagement
                </p>
                <p className="font-['Nunito_Sans'] font-extrabold leading-[20px] relative shrink-0 text-[#004cc9] text-[16px] w-full" data-node-id="1:902" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                  UI/UX Designer
                </p>
              </div>
              <p className="font-['Nunito_Sans'] font-normal italic leading-[20px] relative shrink-0 text-[#1e1e1e] text-[16px] w-full" data-node-id="1:903" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                UX/UI Development for Websites and Apps
                <br aria-hidden />
                Design System, Personas, CJM
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[44px] h-[567px] items-center justify-center pb-[40px] pt-[24px] px-[80px] relative w-[1280px] shrink-0" data-node-id="1:904">
        <div className="absolute h-[397px] left-[1080px] top-[251.79px] w-[419px]" data-node-id="1:905" data-name="image 2090010110">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={footerHeartRight} />
        </div>
        <div className="absolute h-[423px] left-[-58px] top-[-0.21px] w-[446.5px]" data-node-id="1:906" data-name="image 2090010109">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={footerHeartLeft} />
        </div>
        <p className="[word-break:break-word] font-['Nunito_Sans'] font-extrabold leading-[80px] min-w-full relative shrink-0 text-[#004cc9] text-[72px] text-center w-[min-content]" data-node-id="1:907" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
          Ready for new challenges
        </p>
        <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0" data-node-id="1:908">
          <div className="content-stretch flex items-start relative rounded-[12px] shrink-0" data-node-id="1:909" data-name="🔷 Button / Center / Fill · Brand">
            <div className="bg-[#1e1e1e] hover:bg-[#3a3a3a] active:scale-[0.98] transition-all duration-200 ease-out cursor-pointer content-stretch flex gap-[var(----mo-SPx2,8px)] items-center justify-center min-h-[52px] overflow-clip px-[64px] py-[var(----mo-SPx1,4px)] relative rounded-[16px] shrink-0" data-node-id="I1:909;194333:25126" data-name="Button content">
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I1:909;194333:25129" data-name="Content wrap">
                <a className="[word-break:break-word] flex flex-col font-['Nunito_Sans'] font-bold justify-center leading-[0] relative shrink-0 text-[color:var(----mo-button-primary-content-primary-default,white)] text-[length:var(--font\/size\/action,17px)] text-center whitespace-nowrap" href="https://t.me/MsVera" data-node-id="I1:909;194333:25130" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }} target="_blank">
                  <p className="cursor-pointer leading-[var(--font\/line-height\/action,20px)]">Telegram</p>
                </a>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-start relative rounded-[12px] shrink-0 group" data-node-id="1:910" data-name="🔷 Button / Center / Fill · Brand">
            <div className="border-2 border-[#1e1e1e] border-solid hover:bg-[#1e1e1e] active:scale-[0.98] transition-all duration-200 ease-out cursor-pointer content-stretch flex gap-[var(----mo-SPx2,8px)] items-center justify-center min-h-[52px] overflow-clip px-[64px] py-[var(----mo-SPx1,4px)] relative rounded-[16px] shrink-0 w-[203px]" data-node-id="1:911" data-name="Button content">
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="1:914" data-name="Content wrap">
                <a className="[word-break:break-word] flex flex-col font-['Nunito_Sans'] font-bold justify-center leading-[0] relative shrink-0 text-[#1e1e1e] group-hover:text-white transition-colors duration-200 text-[length:var(--font\/size\/action,17px)] text-center whitespace-nowrap" href="mailto:svera2000@mail.ru" data-node-id="1:915" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }} target="_blank">
                  <p className="cursor-pointer">
                    <span className="leading-[var(--font\/line-height\/action,20px)]">E</span>
                    <span className="leading-[var(--font\/line-height\/action,20px)]">-mail</span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
