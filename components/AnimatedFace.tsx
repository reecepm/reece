import { motion } from "framer-motion";
import Image from "next/image";

const variants = {
  hidden: { opacity: 0, scale: 0 },
  enter: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
};
interface AnimatedFaceProps {
  image: string;
  onClick: () => void;
}

const AnimatedFace: React.FC<AnimatedFaceProps> = ({ image, onClick }) => {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      onClick={onClick}
      style={{ cursor: "pointer", margin: -30}}
    >
      <Image src={`/${image}`} height={210} width={210} quality={100} />
    </motion.div>
  );
};

export default AnimatedFace;