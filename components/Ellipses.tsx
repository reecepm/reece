import { HTMLMotionProps, motion } from "framer-motion";
import styled from "styled-components";

export const Ellipse = styled(motion.div)`
  position: absolute;
  width: 661px;
  height: 637px;
  filter: blur(4px);
  z-index: -1;
`;

export const PurpleEllipse = styled(Ellipse)`
  left: -20vw;
  top: 60vh;

  background: radial-gradient(
    50% 50% at 50% 50%,
    #a155dd 0%,
    rgba(161, 85, 221, 0) 100%
  );
`;

export const GreenEllipse = styled(Ellipse)`
  left: 70vw;
  top: 60vh;

  background: radial-gradient(
    50% 50% at 50% 50%,
    #55dd6b 0%,
    rgba(85, 221, 107, 0) 100%
  );
`;

export const PinkEllipse = styled(Ellipse)`
  left: 20vw;
  top: 20vh;

  background: radial-gradient(
    50% 50% at 50% 50%,
    #d4519a 0%,
    rgba(212, 81, 154, 0) 100%
  );
`;

export const BlueEllipse = styled(Ellipse)`
  left: -20vw;
  top: -20vh;

  background: radial-gradient(
    50% 50% at 50% 50%,
    #44acdc 0%,
    rgba(68, 172, 220, 0) 100%
  );
`;

export const YellowEllipse = styled(Ellipse)`
  left: 65vw;
  top: -50vh;

  background: radial-gradient(
    50% 50% at 50% 50%,
    #f6ea70 0%,
    rgba(246, 234, 112, 0) 100%
  );
`;

export const AnimatedEllipse = ({
  Element,
  delay,
}: {
  Element: React.FC<HTMLMotionProps<"div">>;
  delay: number;
}) => {
  return (
    <Element
      animate={{
        scale: [0.5, 1, 0.25, 1, 0.75, 1, 0.5],
      }}
      transition={{
        duration: 30,
        ease: "easeInOut",
        repeat: Infinity,
        delay,
      }}
    />
  );
};
