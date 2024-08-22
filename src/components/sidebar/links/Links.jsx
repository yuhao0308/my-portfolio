import { motion } from "framer-motion";

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
}

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.2,
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: -50,
        opacity: 0,
        transition: {
            delay: 0.1,
            y: { stiffness: 1000 }
        }
    }
}

const Links = () => {
    const items = [
        "Homepage",
        "Services",
        "Portfolio",
        "Contact",
        "About"
    ];
    return (
        <motion.div className="links" variants={variants}>
            {items.map((item) => (
                <motion.a 
                key={item} 
                href={`#${item}`} 
                variants={itemVariants} 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                >
                    {item}
                </motion.a>
            ))}
        </motion.div>
    );
};

export default Links;