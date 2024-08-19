import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQs = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqData = [
        {
            question: "What is Dream Fragrance?",
            answer: "Dream Fragrance is a premium online store offering a unique collection of fragrances that blend nostalgia with modernity. Our products are carefully curated to provide an unforgettable olfactory experience."
        },
        {
            question: "How can I place an order?",
            answer: "To place an order, simply browse our collection, add your desired products to the cart, and proceed to checkout. We accept a variety of payment methods to make your shopping experience seamless."
        },
        {
            question: "What is your return policy?",
            answer: "We offer a 1-day return policy on all our products. If you are not satisfied with your purchase, you can return it within 1 days of receiving it for a full refund or exchange."
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we offer international shipping to most countries. Shipping fees and delivery times vary depending on your location. You can view the shipping options and costs at checkout."
        },
        {
            question: "How can I contact customer support?",
            answer: "You can reach our customer support team via email at zaididrees675@gmail.com or through our contact form on the website. We are here to assist you with any queries you may have."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
            <div className="container mx-auto px-6 py-16">
                {/* Header Section */}
                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h1>
                    <p className="mt-4 text-lg text-gray-400">Find answers to the most common questions about Dream Fragrance.</p>
                </header>

                {/* FAQ Section */}
                <div className="max-w-3xl mx-auto">
                    {faqData.map((faq, index) => (
                        <div key={index} className="mb-6">
                            <div
                                className="flex justify-between items-center bg-gray-800 p-4 rounded-lg cursor-pointer"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3 className="text-lg md:text-xl font-semibold">{faq.question}</h3>
                                {openFAQ === index ? (
                                    <FaChevronUp className="text-gray-400" />
                                ) : (
                                    <FaChevronDown className="text-gray-400" />
                                )}
                            </div>
                            {openFAQ === index && (
                                <div className="bg-gray-700 p-4 rounded-lg mt-2 text-gray-300">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQs;
