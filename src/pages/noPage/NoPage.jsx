import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';

const NoPage = () => {
    return (
        <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 min-h-screen flex items-center justify-center text-white">
            <div className="text-center px-6 md:px-20 lg:px-40">
                {/* Animated 404 Text */}
                <motion.h1 
                    className="text-9xl font-bold mb-8"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    404
                </motion.h1>

                {/* Message */}
                <motion.p
                    className="text-xl md:text-2xl font-medium mb-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Oops! The page you're looking for doesn't exist.
                </motion.p>

                {/* Animated Background Elements */}
                <motion.div
                    className="absolute -top-20 -left-20 w-40 h-40 bg-purple-600 rounded-full opacity-20"
                    animate={{
                        y: [0, 20, -20, 0],
                        x: [0, 20, -20, 0],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                ></motion.div>
                <motion.div
                    className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-600 rounded-full opacity-20"
                    animate={{
                        y: [0, -20, 20, 0],
                        x: [0, -20, 20, 0],
                        rotate: [0, -360],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                ></motion.div>

                {/* Back to Home Button */}
                <motion.div
                    className="mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <Link
                        to="/"
                        className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                    >
                        <FaHome className="mr-2" /> Back to Home
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default NoPage;
