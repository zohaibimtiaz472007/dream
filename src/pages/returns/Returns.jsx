import React from 'react';
import { FaShippingFast, FaRedo } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ShippingAndReturns = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
            <div className="container mx-auto px-6 py-16">
                {/* Header Section */}
                <header className="text-center mb-12">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Shipping & Returns
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-lg text-gray-400"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Everything you need to know about shipping your orders and our return policy.
                    </motion.p>
                </header>

                {/* Shipping Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Shipping Information</h2>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <div className="flex items-center mb-4">
                            <FaShippingFast className="text-blue-500 text-3xl mr-4" />
                            <h3 className="text-xl font-semibold">Fast & Reliable Shipping</h3>
                        </div>
                        <p className="text-gray-300 mb-4">
                            We offer fast and reliable shipping to ensure your orders reach you as quickly as possible. 
                            All orders are processed within 1-2 business days, and delivery times vary depending on your location.
                        </p>
                        <p className="text-gray-300">
                            You will receive a confirmation email with a tracking number once your order has been shipped. 
                            For more details on shipping options and costs, please check out the shipping section during checkout.
                        </p>
                    </div>
                </section>

                {/* Returns Section */}
                <section>
                    <h2 className="text-3xl font-bold mb-6">Return Policy</h2>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <div className="flex items-center mb-4">
                            <FaRedo className="text-red-500 text-3xl mr-4" />
                            <h3 className="text-xl font-semibold">1-Day Return Policy</h3>
                        </div>
                        <p className="text-gray-300 mb-4">
                            We offer a 1-day return policy for all our products. If you are not completely satisfied with your purchase, 
                            you can return it within 1 day of receiving your order for a full refund or exchange.
                        </p>
                        <p className="text-gray-300 mb-4">
                            To initiate a return, please contact our customer support team with your order number and reason for the return. 
                            The product must be in its original condition and packaging.
                        </p>
                        <p className="text-gray-300">
                            Please note that return shipping costs are the responsibility of the customer, and we recommend using a trackable shipping service for your return.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ShippingAndReturns;
