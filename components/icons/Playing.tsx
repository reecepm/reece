import { useWindowWidth } from "@react-hook/window-size";
import { motion, useAnimation } from "framer-motion";

import React, { useEffect } from "react";

interface PlayingProps {
  base: number;
  listening: boolean;
}

const Playing = ({ base, listening }: PlayingProps) => {
  const controls = useAnimation();

  const width = useWindowWidth();

  const maxHeight = width < 451 ? 15 : width < 769 ? 20 : 25;

  useEffect(() => {
    if (listening)
      controls.start({
        height: [baseSize, maxHeight, maxHeight - 10, maxHeight, baseSize],
      });
    else
      controls.set({
        height: baseSize,
      });
  }, [listening]);

  const baseSize = base * maxHeight;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: maxHeight,
      }}
    >
      <motion.div
        animate={controls}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0.25, 0.375, 0.5, 0.625, 0.75],
          repeat: Infinity,
          delay: base,
        }}
        style={{
          width: 3,
          background: listening ? "#55DD6B" : "#bbb",
          borderRadius: 3,
        }}
      />
    </div>
  );
};

export default Playing;
