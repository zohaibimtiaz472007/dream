import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import image from './image.jpg'
import zaid from './zaid.png'
const AboutPage = () => {
    return (
        <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
            {/* Hero Section */}
            <section className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <motion.div 
                    className="relative text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-5xl font-bold mb-4">Welcome to Dream Fragrance</h1>
                    <p className="text-lg font-medium">Crafting unique scents that tell your story</p>
                </motion.div>
            </section>

            {/* Brand Story Section */}
            <section className="py-20 px-8 md:px-20 lg:px-40">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
                >
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Our Story</h2>
                        <p className="text-lg leading-relaxed">
                            Dream Fragrance began with a simple idea: to create timeless scents that capture the essence of individuality and elegance. Our journey started in 2024 with a small team of passionate artisans who believed in the power of fragrance to evoke emotions and memories.
                        </p>
                        <p className="text-lg leading-relaxed mt-4">
                            Today, Dream Fragrance has grown into a global brand, known for its unique blend of tradition and innovation. We continue to craft perfumes that resonate with the modern connoisseur, using only the finest ingredients sourced from around the world.
                        </p>
                    </div>
                    <div>
                        <img src={image} alt="Our Story" className="rounded-lg shadow-lg" />
                    </div>
                </motion.div>
            </section>

            {/* Mission & Values Section */}
            <section className="py-20 bg-gray-800">
                <div className="container mx-auto px-8 md:px-20 lg:px-40 text-center">
                    <motion.h2 
                        className="text-4xl font-bold mb-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Our Mission & Values
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="p-8 bg-gray-900 rounded-lg shadow-lg"
                        >
                            <h3 className="text-2xl font-bold mb-4">Excellence</h3>
                            <p>We are committed to creating perfumes of the highest quality, with a dedication to excellence that defines our brand.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="p-8 bg-gray-900 rounded-lg shadow-lg"
                        >
                            <h3 className="text-2xl font-bold mb-4">Innovation</h3>
                            <p>Innovation drives us to explore new fragrances and techniques, blending tradition with modernity to create timeless scents.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="p-8 bg-gray-900 rounded-lg shadow-lg"
                        >
                            <h3 className="text-2xl font-bold mb-4">Sustainability</h3>
                            <p>We believe in sustainability and ethical practices, ensuring our products are kind to the environment and our communities.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 px-8 md:px-20 lg:px-40">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    <h2 className="text-4xl font-bold mb-12">Meet Our Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="relative group">
                                <img src={member.image} alt={member.name} className="rounded-lg shadow-lg w-full h-auto" />
                                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h3 className="text-xl font-bold">{member.name}</h3>
                                    <p className="text-sm">{member.position}</p>
                                    <div className="flex mt-4 space-x-4">
                                        {member.socials.map((social, i) => (
                                            <a target='blank' key={i} href={social.link} className="text-white text-lg">
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

// Team Members Data
const teamMembers = [
    {
        name: 'Shakir Mughal',
        // position: 'Founder & CEO',
        image: 'https://scontent.fisb5-2.fna.fbcdn.net/v/t39.30808-6/453186730_1008469964315663_6140156895528461483_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGbOS4NNNSnUT-Aanw9wWk72kOKG40FEkzaQ4objQUSTB8ZVSbTxJ8mEq6hfQH-evGVRu8J5q5NPzdOBy8M5Rbw&_nc_ohc=u6eOB7GBFsAQ7kNvgFnplvV&_nc_ht=scontent.fisb5-2.fna&oh=00_AYA_f8EY8JfitelXoZj9DPltw5ikWjymIb4vCqOxzeUdXA&oe=66C74C81',
        socials: [
            { icon: <FaFacebookF />, link: 'https://www.facebook.com/shakir.mughal.520562' },
            { icon: <FaTwitter />, link: 'https://twitter.com' },
            { icon: <FaInstagram />, link: 'https://instagram.com' },
            { icon: <FaLinkedinIn />, link: 'https://linkedin.com' },
        ],
    },
    {
        name: 'Yasir',
        // position: 'Chief Perfumer',
        image: 'https://scontent.fisb5-2.fna.fbcdn.net/v/t39.30808-6/417164236_1107783213910432_8732063534838366986_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFSUfrYEfW8SUOYArYQSCA0pCCuuFfePEOkIK64V948Q0bvmjgWV4gGJQD79cfB9iQWxWEEMA7Clh9qG-06-L7J&_nc_ohc=KHKHBOVM6doQ7kNvgEkYss9&_nc_ht=scontent.fisb5-2.fna&oh=00_AYDeJ05bvz9I7cjwC-kVDVkRDi3Yy2u0oeDT_yBm56_J3A&oe=66C73281',
        socials: [
            { icon: <FaFacebookF />, link: 'https://www.facebook.com/profile.php?id=100040362921614' },
            { icon: <FaTwitter />, link: 'https://twitter.com' },
            { icon: <FaInstagram />, link: 'https://instagram.com' },
            { icon: <FaLinkedinIn />, link: 'https://linkedin.com' },
        ],
    },
    {
        name: 'Zaid',
        // position: 'Chief Perfumer',
        image: zaid,
        socials: [
            { icon: <FaFacebookF />, link: 'https://facebook.com' },
            { icon: <FaTwitter />, link: 'https://twitter.com' },
            { icon: <FaInstagram />, link: 'https://instagram.com' },
            { icon: <FaLinkedinIn />, link: 'https://linkedin.com' },
        ],
    },
    // Add more team members here
];

export default AboutPage;
