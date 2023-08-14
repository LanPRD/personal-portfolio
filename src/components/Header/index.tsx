import Link from "next/link";
import { useState } from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { BiBriefcase, BiFile, BiHomeAlt, BiMessageSquareDetail, BiUser } from "react-icons/bi";
import { IoImageOutline } from "react-icons/io5";
import { PiMoon, PiSun } from "react-icons/pi";
import { TiTimes } from "react-icons/ti";

import { useTheme } from "../../context/Theme";

import { Anchor } from "../Anchor";

import { HeaderTag, NavTag } from "./styles";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <HeaderTag className="header" id="header">
      <NavTag className="container">
        <Link href="#" className="nav__logo">
          Allan
        </Link>

        <div className={`nav__menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list grid">
            <Anchor
              activeLink={true}
              className="nav__item"
              href="home"
              icon={<BiHomeAlt className="nav__icon" />}
              text="Home"
              setShowMenu={() => setShowMenu(false)}
            />

            <Anchor
              className="nav__item"
              href="about"
              icon={<BiUser className="nav__icon" />}
              text="About"
              setShowMenu={() => setShowMenu(false)}
            />

            <Anchor
              className="nav__item"
              href="skills"
              icon={<BiFile className="nav__icon" />}
              text="Skills"
              setShowMenu={() => setShowMenu(false)}
            />

            <Anchor
              className="nav__item"
              href="services"
              icon={<BiBriefcase className="nav__icon" />}
              text="Services"
              setShowMenu={() => setShowMenu(false)}
            />

            <Anchor
              className="nav__item"
              href="portfolio"
              icon={<IoImageOutline className="nav__icon" />}
              text="Portfolio"
              setShowMenu={() => setShowMenu(false)}
            />

            <Anchor
              className="nav__item"
              href="#contact"
              icon={<BiMessageSquareDetail className="nav__icon" />}
              text="Contact me"
              setShowMenu={() => setShowMenu(false)}
            />
          </ul>

          <TiTimes className="nav__close" id="nav-close" onClick={() => setShowMenu(false)} />
        </div>

        <div className="nav__btns">
          <div>
            {theme === "dark" ? (
              <PiSun className="change-theme" id="theme-button" onClick={toggleTheme} />
            ) : (
              <PiMoon className="change-theme" id="theme-button" onClick={toggleTheme} />
            )}
          </div>

          <div className="nav__toggle" id="nav-toggle" onClick={() => setShowMenu(!showMenu)}>
            <AiOutlineAppstore />
          </div>
        </div>
      </NavTag>
    </HeaderTag>
  );
}
