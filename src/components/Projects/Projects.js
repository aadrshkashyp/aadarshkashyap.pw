import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionText, SectionSubTitle, SecondaryBtnCenter, SectionCenter } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { projects } from '../../constants/constants';


const Projects = () => (
  <Section nopadding id='projects'>
    <br />
    <SectionTitle main>Projects</SectionTitle>
    <SectionSubTitle>
      "You can do anything you set your mind to."
      <br />
      - Benjamin Franklin
    </SectionSubTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, visit, github }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <br />
          <div>
            <TitleContent>Main Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={1}>{tag}</Tag>

              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>Visit</ExternalLinks>
            <ExternalLinks href={github}>Github</ExternalLinks>
          </UtilityList>
        </BlogCard>

      ))}


    </GridContainer>
    <br />
    <SectionCenter>
      <SecondaryBtnCenter onClick={() => window.location.href = "https://aadarshkashyap.pw/akprojects"}>Browse other Projects</SecondaryBtnCenter>
    </SectionCenter>
  </Section>
);

export default Projects;