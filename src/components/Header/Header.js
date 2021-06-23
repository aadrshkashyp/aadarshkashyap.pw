import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillCodepenCircle } from 'react-icons/ai';
import { SiAircall } from "react-icons/si";


import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px" }}>
          <SiAircall size="3rem" /> <Span>&nbsp;&nbsp; My Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Abilities</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/aadrshkashyp">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/aadarsh--kashyap/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/aadrshkashyp/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://codepen.io/aadrshkashyp">
        <AiFillCodepenCircle size="3rem" />
      </SocialIcons>
    </Div3>

  </Container>
);



export default Header;
