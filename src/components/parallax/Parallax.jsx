import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Parallax = ({ type }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target:ref,
        offset: ["start end", "end start"],
    }); 
    const yText = useTransform(scrollYProgress, [0, 1], ["-450%", "450%"]);
    const yPlanets = useTransform(scrollYProgress, [0, 1], ["-60%", "60%"]);
    const xStars = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
    return (
        <div 
            ref = {ref}
            className="parallax"
            style={{
                background: 
                type === "services"
                ? "linear-gradient(180deg, #111132, #0c0c1d)" 
                : "linear-gradient(180deg, #111132, #505064)",
            }}
        >
            <motion.h1 style={{ y: yText }}>{type === "services" ? "What I do?" : "What I did?"}</motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div  
                className="planets" 
                style={{
                    y: yPlanets,
                    backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png"})`}}
                ></motion.div>
            <motion.div style={{x: xStars}} className="stars"></motion.div>
        </div>
    );
};

export default Parallax;