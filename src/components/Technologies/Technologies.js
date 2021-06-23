import React from 'react';
import { DiCssTricks, DiFirebase, DiHeroku, DiMongodb, DiMysql, DiNodejs, DiReact, DiZend, DiHtml5, DiPhotoshop, DiPhp, DiCss3, DiJavascript, DiBootstrap, tailwind, DiWordpress, } from 'react-icons/di';
import { SiTailwindcss, SiWoocommerce } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle, SectionSubTitle, SectionCenter } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Abilities</SectionTitle>
    <SectionSubTitle>      "Life without knowledge is death in disguise."
      <br />
      - Talib Kweli</SectionSubTitle>


    <SectionCenter><SectionSubTitle> Front-End Technologies</SectionSubTitle></SectionCenter>
    <List>
      <ListItem>
        <DiReact size="5rem" />
        <ListContainer>
          <ListTitle>React</ListTitle>
          <ListParagraph>
            React is an open-source front-end library licensed and released under MIT in 2013. React is probably the most used front-end technology and has greatly improved with every update.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiBootstrap size="5rem" />
        <ListContainer>
          <ListTitle>Bootstrap</ListTitle>
          <ListParagraph>
            Bootstrap, as a front-end development framework, allows websites to be highly responsive with its fluid grid layout and gives a mobile-ready platform perfect for all the devices.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <SiTailwindcss size="5rem" />
        <ListContainer>
          <ListTitle>Tailwind</ListTitle>
          <ListParagraph>
            Tailwind CSS is a highly customizable CSS framework. Tailwind CSS framework is easy to learn and the developers can work faster as it provides all the tools required to build any custom CSS.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

    <SectionCenter><SectionSubTitle> Back-End Technologies</SectionSubTitle></SectionCenter>
    <List>
      <ListItem>
        <DiJavascript size="5rem" />
        <ListContainer>
          <ListTitle>JavaScript</ListTitle>
          <ListParagraph>
            JavaScript allows developers to use it as both front and backend technology. That’s why it is quick and easier to produce both mobile and web applications with this scripting language.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiPhp size="5rem" />
        <ListContainer>
          <ListTitle>PHP & Lavarel</ListTitle>
          <ListParagraph>
            This open-source backend technology is commonly used for websites. Around 79.1% of websites on the internet use PHP as server-side technology, according to a recent survey of W3Techs. .
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiNodejs size="5rem" />
        <ListContainer>
          <ListTitle>Node.js & Express</ListTitle>
          <ListParagraph>
            Node.js is well-regarded by the development community. It is commonly known as one of the most popular web technologies. Express is widely requested among Node.js backend developers.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

    <SectionCenter><SectionSubTitle> Other Technologies</SectionSubTitle></SectionCenter>
    <List>
      <ListItem>
        <DiWordpress size="5rem" />
        <ListContainer>
          <ListTitle>WordPress</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <SiWoocommerce size="5rem" />
        <ListContainer>
          <ListTitle>Woocommerce</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiWordpress size="5rem" />
        <ListContainer>
          <ListTitle>WordPress</ListTitle>
        </ListContainer>
      </ListItem>




    </List>
  </Section>
);

export default Technologies;
