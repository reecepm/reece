import React from "react";
import styled from "styled-components";
import { Social } from "../components/common";
import GithubIcon from "../components/icons/Github";
import InstagramIcon from "../components/icons/Instagram";
import TwitterIcon from "../components/icons/Twitter";
import { PageLayout } from "../components/Layout";
import Spotify from "../components/Spotify";

const HomeTitle = styled.div`
  font-size: 9em;
  font-weight: bold;
  color: #2e2c6c;
  transition: all 0.15s linear;

  @media (max-width: 768px) {
    font-size: 6em;
  }

  @media (max-width: 450px) {
    font-size: 4.5em;
  }
`;

const HomeSubTitle = styled.div`
  font-weight: bold;
  font-size: 1.25em;
  color: rgba(46, 44, 108, 0.75);

  @media (max-width: 768px) {
    font-size: 1.125em;
  }

  @media (max-width: 450px) {
    font-size: 1em;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const CenterColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home: React.FC = () => {
  return (
    <PageLayout>
      <CenterColumn
        style={{
          gap: 40,
        }}
      >
        <CenterColumn>
          <HomeTitle>reece</HomeTitle>
          <HomeSubTitle>software developer</HomeSubTitle>
        </CenterColumn>
        <CenterColumn style={{ gap: 20 }}>
          <Spotify />
          <Socials>
            <a
              href="https://github.com/cascoid"
              target="_blank"
              rel="noreferrer"
            >
              <Social>
                <GithubIcon height={40} width={40} />
              </Social>
            </a>
            <a
              href="https://twitter.com/cascoid"
              target="_blank"
              rel="noreferrer"
            >
              <Social>
                <TwitterIcon height={40} width={40} />
              </Social>
            </a>
            {/* <a
              href="https://instagram.com/reece_pm"
              target="_blank"
              rel="noreferrer"
            >
              <Social>
                <InstagramIcon height={40} width={40} />
              </Social>
            </a> */}
          </Socials>
        </CenterColumn>
      </CenterColumn>
    </PageLayout>
  );
};

export default Home;
