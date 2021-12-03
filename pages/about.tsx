import React, { useState } from "react";
import { PageLayout } from "../components/Layout";
import { AnimatePresence } from "framer-motion";
import AnimatedFace from "../components/AnimatedFace";
import { Title, SubTitle, Desc, MainColumn } from "../components/common";

const images = ["first.png", "second.png", "third.png"];

const About: React.FC = () => {
  const [picture, setPicture] = useState(0);

  const nextPic = () => {
    const next = picture + 1 > images.length - 1 ? 0 : picture + 1;
    setPicture(next);
  };

  return (
    <PageLayout>
      <MainColumn>
        <AnimatePresence exitBeforeEnter>
          {images.map(
            (item, i) =>
              picture === i && (
                <AnimatedFace image={item} onClick={nextPic} key={item} />
              )
          )}
        </AnimatePresence>
        <Title>hey, i'm reece</Title>
        <SubTitle>about myself</SubTitle>
        <Desc>
          i am a software developer from the united kingdom. i am interested in
          building polished mobile, web and desktop applications. currently i am
          working on a few web and mobile applications. <br />
          <br />i also enjoy working out, sneakers/streetwear, travel and
          football.
        </Desc>
        <div style={{ height: 10 }} />
        <SubTitle>always learning</SubTitle>
        <Desc>
          although i did not pursue the traditional education route, i am a firm
          believer for everyone to always be learning, in all roads of life.{" "}
          <br />
          <br />
          “once you stop learning, you start dying”.
        </Desc>
      </MainColumn>
    </PageLayout>
  );
};

export default About;
