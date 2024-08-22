import {useState} from "react";
import {motion} from "framer-motion";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";
import Links from "./links/Links";

const variants = {
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        transition: {
            type: "spring",
            stiffness: 40,
        },
    },
    closed: {
        clipPath: "circle(24px at 50px 50px)",
        transition: {
            type: "tween",
            duration: 0.5,
        },
    },
};

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);



    return (
        <motion.div className="sidebar" variants={variants} initial="closed" animate={isOpen ? "open" : "closed"}>
            <motion.div className="bg">
                <Links/>
            </motion.div>
            <ToggleButton setIsOpen={setIsOpen}/>
        </motion.div>
    );
};

export default Sidebar;