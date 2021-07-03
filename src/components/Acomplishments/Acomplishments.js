import React from 'react';

import { Section, SectionDivider, SectionTitle, SectionSubTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 10, text: 'Open Source Projects', link: 'https://github.com/aadrshkashyp?tab=repositories', },
  { number: '10K', text: 'Lines Coded', link: '#', },
  { number: '750', text: 'Clients Served ', link: '#', },
  { number: '5000', text: 'Knowledge Contribution in Online Communities', link: '#', }
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