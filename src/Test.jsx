import React, {useState} from "react";
import {motion} from "framer-motion";

const Test = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.5
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0.1, x: -50 },
    visible: { opacity: 1, x: 0 }
  }

  const items = ["item1", "item2", "item3", "item4"]

  return (
    <div className="course">
        <motion.ul variants={containerVariants} initial="hidden" animate="visible">
            {items.map((item) => (
                <motion.li key={item} variants={itemVariants}>{item}</motion.li>
            ))} 
        </motion.ul>
    </div>
  );
};

export default Test;