import React from "react";
import styled from "styled-components";
import { MainColumn, Social, SubTitle, Title } from "../components/common";
import DiscordIcon from "../components/icons/Discord";
import EmailIcon from "../components/icons/Email";
import TwitterIcon from "../components/icons/Twitter";
import { PageLayout } from "../components/Layout";

const Handle = styled.div`
  font-size: 1.25em;
  font-weight: bold;
  color: rgba(46, 44, 108, 0.75);
`;

const Contact: React.FC = () => {
  return (
    <PageLayout>
      <MainColumn>
        <Title>contact me</Title>
        <div style={{ height: 20 }} />
        <SubTitle>socials</SubTitle>
        <Social>
          <DiscordIcon height={34} width={34} />
          <Handle style={{textTransform: "none"}}>Reece#9999</Handle>
        </Social>
        <a href="https://twitter.com/cascoid" target="_blank" rel="noreferrer">
          <Social>
            <TwitterIcon height={34} width={34} />
            <Handle>@reece_pm</Handle>
          </Social>
        </a>
        <a href="mailto:admin@eternal.dev" target="_blank" rel="noreferrer">
          <Social>
            <EmailIcon height={34} width={34} />
            <Handle>admin@eternal.dev</Handle>
          </Social>
        </a>
      </MainColumn>
    </PageLayout>
  );
};

export default Contact;
