import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => {
  return (
    <Container>
      <Div1>
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem" color="#212427" />
          <Span>Shiki</Span>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>

        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>

        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/TamarawGuy" target="_blank">
          <AiFillGithub size="3rem" color="#212427" />
        </SocialIcons>

        <SocialIcons
          href="https://www.linkedin.com/in/viktor-rumenov-910a881ab/"
          target="_blank"
        >
          <AiFillLinkedin size="3rem" color="#212427" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
