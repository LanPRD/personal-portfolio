"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { BiBriefcase, BiFile, BiHomeAlt, BiMessageSquareDetail, BiUser } from "react-icons/bi";
import { IoImageOutline } from "react-icons/io5";
import { PiMoon, PiSun } from "react-icons/pi";
import { TiTimes } from "react-icons/ti";

import { cn } from "../lib/css";
import { Anchor } from "./anchor";

export function Header() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const t = useTranslations("header");
  const { setTheme, theme } = useTheme();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  function switchLocale(newLocale: "en" | "pt-br") {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <header
      className={cn("w-full fixed bottom-0 left-0 z-(--z-fixed) bg-(--body-color)", "md:top-0 md:bottom-auto")}
      id="header"
    >
      <nav
        className={cn(
          "container ml-0 max-w-[968px] h-(--header-height) flex justify-between items-center",
          "md:h-[calc(var(--header-height)+2.4rem)] md:gap-x-[1.6rem]"
        )}
      >
        <Link href="#" className="text-(--title-color) font-(--font-medium) hover:text-(--first-color)">
          Allan
        </Link>

        <div className="flex">
          <button
            onClick={() => switchLocale("pt-br")}
            className={cn(
              "text-(--title-color) font-(--font-medium) hover:text-(--first-color)",
              locale === "pt-br" && "text-(--first-color)"
            )}
          >
            pt
          </button>

          <span className="text-(--title-color)">-</span>

          <button
            onClick={() => switchLocale("en")}
            className={cn(
              "text-(--title-color) font-(--font-medium) hover:text-(--first-color)",
              locale === "en" && "text-(--first-color)"
            )}
          >
            en
          </button>
        </div>

        <div
          className={cn(
            // Mobile base styles
            "fixed left-0 w-full bg-(--body-color) pt-[3.2rem] px-[2.4rem] pb-[6.4rem]",
            "shadow-[0_-1px_4px_rgba(0,0,0,0.15)] rounded-t-[2.4rem]",
            "transition-[bottom] duration-300",
            // Menu visibility
            showMenu ? "bottom-0" : "-bottom-full",
            // Desktop styles
            "md:static md:bottom-auto md:w-auto md:bg-transparent",
            "md:p-0 md:shadow-none md:rounded-none md:ml-auto"
          )}
          id="nav-menu"
        >
          <ul className={cn("grid grid-cols-3 gap-[3.2rem]", "md:flex md:gap-x-[3.2rem] md:gap-y-0")}>
            <Anchor
              activeLink={true}
              className="nav__item"
              href="home"
              icon={<BiHomeAlt className="text-[1.8rem] md:hidden" />}
              text={t("home")}
              setShowMenu={() => setShowMenu(false)}
            />

            <Anchor
              className="nav__item"
              href="about"
              icon={<BiUser className="text-[1.8rem] md:hidden" />}
              text={t("about")}
              setShowMenu={() => setShowMenu(false)}
            />

            <Anchor
              className="nav__item"
              href="skills"
              icon={<BiFile className="text-[1.8rem] md:hidden" />}
              text={t("skills")}
              setShowMenu={() => setShowMenu(false)}
            />

            <Anchor
              className="nav__item"
              href="services"
              icon={<BiBriefcase className="text-[1.8rem] md:hidden" />}
              text={t("services")}
              setShowMenu={() => setShowMenu(false)}
            />

            <Anchor
              className="nav__item"
              href="portfolio"
              icon={<IoImageOutline className="text-[1.8rem] md:hidden" />}
              text={t("portfolio")}
              setShowMenu={() => setShowMenu(false)}
            />

            <Anchor
              className="nav__item"
              href="contact"
              icon={<BiMessageSquareDetail className="text-[1.8rem] md:hidden" />}
              text={t("contact")}
              setShowMenu={() => setShowMenu(false)}
            />
          </ul>

          <TiTimes
            className={cn(
              "absolute right-8 bottom-[0.8rem] text-[2.4rem]",
              "cursor-pointer text-(--first-color) hover:text-(--first-color-alt)",
              "md:hidden"
            )}
            id="nav-close"
            onClick={() => setShowMenu(false)}
          />
        </div>

        <div className="nav__btns">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="change-theme"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <PiSun /> : <PiMoon />}
          </button>

          <button
            className={cn(
              "text-(--title-color) font-(--font-medium) text-[2rem]",
              "cursor-pointer hover:text-(--first-color)",
              "md:hidden"
            )}
            id="nav-toggle"
            onClick={() => setShowMenu(!showMenu)}
          >
            <AiOutlineAppstore />
          </button>
        </div>
      </nav>
    </header>
  );
}
