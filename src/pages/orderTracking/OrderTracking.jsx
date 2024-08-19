import React from 'react';
import { FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const OrderTracking = () => {
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
                        Order Tracking
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-lg text-gray-400"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Easily track your orders by reaching out to us via WhatsApp.
                    </motion.p>
                </header>

                {/* Tracking Instructions Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">How to Track Your Order</h2>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <div className="flex items-center mb-4">
                            <FaMapMarkerAlt className="text-green-500 text-3xl mr-4" />
                            <h3 className="text-xl font-semibold">Order Tracking Instructions</h3>
                        </div>
                        <p className="text-gray-300 mb-4">
                            To track your order, please follow these steps:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 mb-4">
                            <li>Save our WhatsApp number: <strong>+92 3161540007</strong></li>
                            <li>Send us a message with your order number.</li>
                            <li>Our support team will provide you with the latest updates on your order status.</li>
                        </ul>
                        <p className="text-gray-300">
                            For any additional inquiries, feel free to contact us on WhatsApp. We are here to assist you!
                        </p>
                    </div>
                </section>

                {/* Contact Section */}
                <section>
                    <h2 className="text-3xl font-bold mb-6">Contact Us on WhatsApp</h2>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center">
                        <FaWhatsapp className="text-green-500 text-4xl mr-4" />
                        <div>
                            <p className="text-gray-300 mb-2">Need assistance? Reach out to us on WhatsApp:</p>
                            <a 
                                href="https://wa.me/923161540007"
                                className="text-blue-400 hover:text-blue-300 font-semibold"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                +92 3161540007
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default OrderTracking;
