import { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";
import { motion } from 'framer-motion';
import { FaUserCircle, FaCalendarAlt, FaDollarSign, FaTag } from 'react-icons/fa';

const UserDashboard = () => {
    const user = JSON.parse(localStorage.getItem('users'));

    const context = useContext(myContext);
    const { loading, getAllOrder } = context;

    return (
        <Layout>
            <div className="container mx-auto px-4 py-8 lg:py-12">
                {/* Top Section */}
                <motion.div
                    className="bg-gradient-to-r from-pink-500 to-pink-700 text-white py-6 rounded-lg shadow-lg mb-8"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center justify-center mb-4">
                        <FaUserCircle className="text-6xl mr-4" />
                        <div className="text-center">
                            <h1 className="text-3xl font-bold">{user?.name}</h1>
                            <p className="text-lg">{user?.email}</p>
                            <p className="text-lg">Date: {user?.date}</p>
                            <p className="text-lg">Role: {user?.role}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Order Details Section */}
                <motion.div
                    className="bg-gray-800 text-white p-6 rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-bold mb-6">Order Details</h2>

                    {loading && (
                        <div className="flex justify-center mb-6">
                            <Loader />
                        </div>
                    )}

                    {getAllOrder.filter((obj) => obj.userid === user?.uid).map((order, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="flex flex-col md:flex-row">
                                {/* Order Info */}
                                <div className="w-full md:w-1/3 bg-gray-800 p-4 border-r border-gray-700">
                                    <div className="mb-4 flex items-center">
                                        <FaTag className="text-yellow-400 text-2xl mr-3" />
                                        <h3 className="text-xl font-semibold">Order ID</h3>
                                    </div>
                                    <p className="text-lg font-medium mb-2">#{order.id}</p>
                                    <div className="flex items-center mb-4">
                                        <FaCalendarAlt className="text-blue-400 text-2xl mr-3" />
                                        <p className="text-lg font-medium">{order.date}</p>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <FaDollarSign className="text-green-400 text-2xl mr-3" />
                                        <p className="text-lg font-medium">₹ {order.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <div className={`text-lg font-medium ${order.status === 'pending' ? 'text-red-500' : 'text-green-500'}`}>
                                            {order.status.toUpperCase()}
                                        </div>
                                    </div>
                                </div>

                                {/* Order Items */}
                                <div className="w-full md:w-2/3 p-4">
                                    <ul className="divide-y divide-gray-700">
                                        {order.cartItems.map((item, index) => {
                                            const { id, date, quantity, price, title, productImageUrl, category } = item;
                                            return (
                                                <li key={id} className="flex items-center py-4">
                                                    <img
                                                        src={productImageUrl}
                                                        alt={title}
                                                        className="w-24 h-24 object-cover rounded-md border border-gray-700 mr-4"
                                                    />
                                                    <div className="flex-1">
                                                        <p className="text-lg font-semibold text-white">{title}</p>
                                                        <p className="text-sm text-gray-400">{category}</p>
                                                        <p className="text-sm text-gray-300 mt-2">x {quantity}</p>
                                                    </div>
                                                    <p className="text-lg font-semibold text-white">₹ {price}</p>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </Layout>
    );
};

export default UserDashboard;
