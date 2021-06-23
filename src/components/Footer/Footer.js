import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillCodepenCircle } from 'react-icons/ai';


import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer, SloganSub, LinkColumnEnd } from './FooterStyles';


const Footer = () => {
  return (

    <FooterWrapper>

      <LinkList>
        <LinkColumn>
          <img src="https://aadarshkashyap.pw/wp-content/uploads/2021/05/logo.png" />
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+917462829129">+91 7462829129</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:aadarshkashyap@aol.com">
            aadarshkashyap@aol.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>“Once we accept our limits, we go beyond them.”</Slogan>
          <br />
          <SloganSub>― Albert Einstein</SloganSub>
        </CompanyContainer>
        <SocialContainer>
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
        </SocialContainer>
      </SocialIconsContainer>

    </FooterWrapper >
  );
};

export default Footer;