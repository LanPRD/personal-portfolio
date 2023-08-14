import { useState } from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { BiBriefcase, BiFile, BiHomeAlt, BiMessageSquareDetail, BiUser } from "react-icons/bi";
import { IoImageOutline } from "react-icons/io5";
import { TiTimes } from "react-icons/ti";

import { Anchor } from "../Anchor";

import { HeaderTag, NavTag } from "./styles";

export function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <HeaderTag id="header">
      <NavTag className="container">
        <a href="#" className="nav__logo">
          Allan
        </a>

        <div className={`nav__menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list grid">
            <Anchor
              activeLink={true}
              className="nav__item"
              href="home"
              icon={<BiHomeAlt />}
              text="Home"
              setShowMenu={() => setShowMenu(false)}
            />

            <Anchor
              className="nav__item"
              href="about"
              icon={<BiUser />}
              text="About"
              setShowMenu={() => setShowMenu(false)}
            />

            <Anchor
              className="nav__item"
              href="skills"
              icon={<BiFile />}
              text="Skills"
              setShowMenu={() => setShowMenu(false)}
            />

            <Anchor
              className="nav__item"
              href="services"
              icon={<BiBriefcase />}
              text="Services"
              setShowMenu={() => setShowMenu(false)}
            />

            <Anchor
              className="nav__item"
              href="portfolio"
              icon={<IoImageOutline />}
              text="Portfolio"
              setShowMenu={() => setShowMenu(false)}
            />

            <Anchor
              className="nav__item"
              href="#contact"
              icon={<BiMessageSquareDetail />}
              text="Contact me"
              setShowMenu={() => setShowMenu(false)}
            />
          </ul>

          <TiTimes className="nav__close" id="nav-close" onClick={() => setShowMenu(false)} />
        </div>

        <div className="nav__btns">
          <div className="nav__toggle" id="nav-toggle" onClick={() => setShowMenu(!showMenu)}>
            <AiOutlineAppstore />
          </div>
        </div>
      </NavTag>
    </HeaderTag>
  );
}
