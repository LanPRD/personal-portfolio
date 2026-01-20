"use client";

import { cn } from "@/lib/css";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { PiInstagramLogo, PiLinkedinLogo } from "react-icons/pi";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="pt-8">
      <div className={cn("bg-(--first-color-second) p-[2rem_0_3rem]", "md:p-[4.8rem_0_5.6rem]")}>
        <div className={cn("container grid gap-y-14", "sm:grid-cols-2", "md:grid-cols-[auto_1fr_auto]")}>
          <div>
            <h1 className="text-(length:--h1-font-size) text-white mb-(--mb-0-25)">Allan</h1>
            <span className="text-(length:--small-font-size) text-white">Fullstack developer</span>
          </div>

          <ul className={cn("flex flex-col justify-center gap-y-6", "md:flex-row md:gap-x-[3.2rem] md:gap-y-0")}>
            <li>
              <Link href="#services" className="text-white hover:text-(--first-color-lighter)">
                {t("services")}
              </Link>
            </li>

            <li>
              <Link href="#portfolio" className="text-white hover:text-(--first-color-lighter)">
                {t("portfolio")}
              </Link>
            </li>

            <li>
              <Link href="#contact" className="text-white hover:text-(--first-color-lighter)">
                {t("contactme")}
              </Link>
            </li>
          </ul>

          <div className="md:justify-self-end">
            <a
              href="https://www.instagram.com/allanprd/"
              target="_blank"
              className="text-[2rem] text-white hover:text-(--first-color-lighter) mr-(--mb-1-5) inline-block"
              rel="noreferrer"
            >
              <PiInstagramLogo />
            </a>

            <a
              href="https://www.linkedin.com/in/lanprd"
              target="_blank"
              className="text-[2rem] text-white hover:text-(--first-color-lighter) mr-(--mb-1-5) inline-block"
              rel="noreferrer"
            >
              <PiLinkedinLogo />
            </a>
          </div>
        </div>

        <p
          className={cn(
            "text-(length:--smaller-font-size) text-center text-(--text-color-light)",
            "mt-(--mb-3) md:mt-[7.2rem]"
          )}
        >
          &#169; {t("copy")}
        </p>
      </div>
    </footer>
  );
}
