import React from 'react';
import { DiCssTricks, DiFirebase, DiHeroku, DiMongodb, DiMysql, DiNodejs, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle, SectionSubTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Abilities</SectionTitle>
    <SectionSubTitle>      "Life without knowledge is death in disguise."
      <br />
      - Talib Kweli</SectionSubTitle>
    <List>
      <ListItem>
        <DiReact size="5rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiMysql size="5rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiCssTricks size="5rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiNodejs size="5rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiMongodb size="5rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiHeroku size="5rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
  </Section>
);

export default Technologies;
