import { MAIN_LAYOUT_TEXT } from "../config";
import { LogoIcon } from "@/src/shared/assets";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"]
});

export const MainLogo = () => {
  return (
    <div className="flex gap-2" aria-labelledby="site-title">
      <LogoIcon aria-hidden="true" />
      <h1
        id="site-title"
        className={`${poppins.className} text-secondary-white text-[1.375rem] leading-[1.65rem] tracking-[-0.01375rem] text-nowrap`}
      >
        {MAIN_LAYOUT_TEXT.LOGO}
      </h1>
    </div>
  );
};
