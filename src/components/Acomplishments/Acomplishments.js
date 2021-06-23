import React from 'react';

import { Section, SectionDivider, SectionTitle, SectionSubTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects', link: 'https://google.com', },
  { number: 1000, text: 'Students', link: 'https://google.com', },
  { number: 1900, text: 'Github Followers', link: 'https://google.com', },
  { number: 5000, text: 'Github Stars', link: 'https://google.com', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <SectionSubTitle>

      “Only those who attempt the absurd can achieve the impossible.”
      <br />
      - Albert Einstein
    </SectionSubTitle>
    <Boxes>
      {data.map((card, index, link) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;