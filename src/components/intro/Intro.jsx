import "./intro.scss";
import { motion } from "framer-motion";

const textVariants = {
    initial: {
        opacity: 0,
        x: -500,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};

const slidingTextVariants = {
    initial: {
        x: "0%",
    },
    animate: {
        x: "-100%",
        transition: {
            duration: 40,
            repeat: Infinity,
            ease: "linear",
        },
    },
};


const Intro = () => {
    return (
        <div className="intro">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>YuHao Wang</motion.h2>
                    <motion.h1 variants={textVariants}>Web Developer</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button 
                        variants={textVariants}
                        whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.2)", color: "white" }}
                        whileTap={{ scale: 0.9 }}
                        >See my Latest Projects</motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img src="/scroll.png" alt="scroll down" variants={textVariants} animate="scrollButton" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer">
                <motion.div variants={slidingTextVariants} initial="initial" animate="animate">
                    Interactive Intuitive Inspiring&nbsp;
                </motion.div>
                <motion.div variants={slidingTextVariants} initial="initial" animate="animate">
                    Interactive Intuitive Inspiring&nbsp;
                </motion.div>
            </motion.div>
            <div className="imageContainer">
                <img src="/intro.JPG" alt="me" />
            </div>
        </div>
    );
};

export default Intro;