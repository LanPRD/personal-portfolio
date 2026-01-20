"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { BiBriefcase, BiFile, BiHomeAlt, BiMessageSquareDetail, BiUser } from "react-icons/bi";
import { IoImageOutline } from "react-icons/io5";
import { PiMoon, PiSun } from "react-icons/pi";
import { TiTimes } from "react-icons/ti";

import { useTheme } from "../context/Theme";
import { Anchor } from "./anchor";
import { cn } from "../lib/css";

export function Header() {
  const t = useTranslations("header");
  const { theme, toggleTheme } = useTheme();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <header
      className={cn("w-full fixed bottom-0 left-0 z-(--z-fixed) bg-(--body-color)", "md:top-0 md:bottom-auto")}
      id="header"
    >
      <nav
        className={cn(
          "container max-w-[968px] h-(--header-height) flex justify-between items-center",
          "md:h-[calc(var(--header-height)+2.4rem)] md:gap-x-[1.6rem]"
        )}
      >
        <Link href="#" className="text-(--title-color) font-(--font-medium) hover:text-(--first-color)">
          Allan
        </Link>

        <div className="flex gap-2">
          <Link
            href="/"
            className="text-(--title-color) font-(--font-medium) hover:text-(--first-color)"
            locale="pt"
            scroll={false}
          >
            pt
          </Link>
          <span className="text-(--title-color)">-</span>
          <Link
            href="/"
            className="text-(--title-color) font-(--font-medium) hover:text-(--first-color)"
            locale="en"
            scroll={false}
          >
            en
          </Link>
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
          <div>
            {theme === "dark" ? (
              <PiSun className="change-theme" id="theme-button" onClick={toggleTheme} />
            ) : (
              <PiMoon className="change-theme" id="theme-button" onClick={toggleTheme} />
            )}
          </div>

          <div
            className={cn(
              "text-(--title-color) font-(--font-medium) text-[2rem]",
              "cursor-pointer hover:text-(--first-color)",
              "md:hidden"
            )}
            id="nav-toggle"
            onClick={() => setShowMenu(!showMenu)}
          >
            <AiOutlineAppstore />
          </div>
        </div>
      </nav>
    </header>
  );
}
