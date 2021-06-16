import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey<img loading="lazy" src="https://aadarshkashyap.pw/wp-content/uploads/2021/05/waving_hand.gif" width="50" height="50"></img> <br />
        I'm Aadarsh kashyap
      </SectionTitle>
      <SectionText>
        Expert in all aspects of WordPress website creation, including design, plug-ins, SEO, optimization, and Website Hosting implementation. Skilled in creating engaging and interactive websites.
      </SectionText>
      <Button onClick={() => window.location.href = "mailto:aadarshkashyap@aol.com"}>Let's Talk</Button>

    </LeftSection>
    <RightSection>

    </RightSection>

  </Section>

);

export default Hero;