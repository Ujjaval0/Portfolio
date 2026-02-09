import { motion } from "framer-motion";
import React from "react";

interface Props {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "100%" }: Props) => {
    return (
        <div style={{ position: "relative", width, overflow: "visible" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
};
