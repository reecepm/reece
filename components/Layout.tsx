import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import Footer from "./Footer";
import {
  AnimatedEllipse,
  BlueEllipse,
  GreenEllipse,
  PinkEllipse,
  PurpleEllipse,
  YellowEllipse,
} from "./Ellipses";

const TopBar = styled.div`
  width: 100%;
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 2vw;
`;

const Nav = styled.div`
  background: rgba(216, 219, 238, 0.85);
  border-radius: 30px;
  position: relative;
  display: flex;
  padding: 4px;
  height: 44px;
  align-items: center;
  justify-content: center;
`;

const NavItem = styled.div`
  font-size: 0.875em;
  font-weight: bold;
  position: relative;
  display: grid;
  padding: 0 20px;
  cursor: pointer;
`;

const NavChild = styled.div`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlurCover = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(244, 244, 250, 0.8);
  backdrop-filter: blur(4px);
`;

const MainArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: calc(100vh - 104px - 75px);
`;

const variants = {
  hidden: { opacity: 0, scale: 0 },
  enter: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
};

const pages = [
  { url: "/", text: "home" },
  { url: "/about", text: "about" },
  { url: "/portfolio", text: "portfolio" },
  { url: "/contact", text: "contact" },
];


//nav bar is very hacky i know
const Layout: React.FC = ({ children }) => {
  const router = useRouter();

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <BlurCover>
        <TopBar>
          <Nav>
            {pages.map((page) => (
              <Link href={page.url} key={page.text}>
                <NavItem>
                  <NavChild> 
                    {page.url === router.route && (
                      <motion.div
                        layoutId="sideline"
                        style={{
                          backgroundColor: "white",
                          height: 34,
                          fontWeight: "bold",
                          fontSize: "0.875em",
                          borderRadius: "30px",
                          position: "absolute",
                          padding: "10px 20px",
                          color: "transparent",
                        }}
                      >
                        {page.text}
                      </motion.div>
                    )}
                  </NavChild>
                  <NavChild style={{ zIndex: 1 }}>{page.text}</NavChild>
                </NavItem>
              </Link>
            ))}
          </Nav>
        </TopBar>
        {children}
        <Footer />
      </BlurCover>
      <div>
        <AnimatedEllipse Element={PurpleEllipse} delay={3} />
        <AnimatedEllipse Element={YellowEllipse} delay={5} />
        <AnimatedEllipse Element={BlueEllipse} delay={4} />
        <AnimatedEllipse Element={PinkEllipse} delay={2} />
        <AnimatedEllipse Element={GreenEllipse} delay={7} />
      </div>
    </div>
  );
};

export const PageLayout: React.FC = ({ children }) => {
  return (
    <MainArea>
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
      >
        {children}
      </motion.main>
    </MainArea>
  );
};

export default Layout;
