import React, { FC } from 'react';
import { ImSpinner } from "react-icons/im";
import { motion } from "framer-motion";
import { Div } from "../core/Containers";
import { Text } from "../core/TextElements";

export const LoadingElement: FC<any> = () => {
    return (
        <Div className="fixed z-50 flex min-h-screen w-full flex-col items-center justify-center bg-white">
            <motion.div
                animate={{
                    opacity: 1,
                    y: 0, // Reset the y position to avoid jumping
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                }}
                initial={{
                    opacity: 0,
                    y: -50, // Start the element off the top of the screen
                }}
            >
                <ImSpinner className="animate-spin my-4 text-blue-100 text-4xl text-center mx-auto" />
                <Text className="font-bold text-blue-100">
                    Loading please wait
                </Text>
            </motion.div>
        </Div>
    )
}
