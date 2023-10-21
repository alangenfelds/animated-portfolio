import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import "./parallax.scss";

const Parallax = ({ type }) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  return (
    <motion.div
      ref={containerRef}
      className="parallax"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What I am doing?" : "My projects"}
      </motion.h1>
      <motion.div className="stars" style={{ x: yBg }}></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div className="mountains"></motion.div>
    </motion.div>
  );
};

export default Parallax;
