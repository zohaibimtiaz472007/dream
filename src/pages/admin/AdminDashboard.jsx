import { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ProductDetail from '../../components/admin/ProductDetail';
import OrderDetail from '../../components/admin/OrderDetail';
import UserDetail from '../../components/admin/UserDetail';
import { useContext } from 'react';
import myContext from '../../context/myContext';
import { fireDB } from '../../firebase/FirebaseConfig';
import { doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';

const AdminDashboard = () => {
    const user = JSON.parse(localStorage.getItem('users'));
    const context = useContext(myContext);
    const { getAllProduct, getAllOrder, getAllUser } = context;

    const [whatsappNumber, setWhatsappNumber] = useState('');

    // Fetch the current WhatsApp number on component mount
    useEffect(() => {
        const fetchWhatsappNumber = async () => {
            const docRef = doc(fireDB, 'settings', 'contact');
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setWhatsappNumber(docSnap.data().whatsappNumber || '');
            } else {
                console.log('No such document!');
                setWhatsappNumber('');
            }
        };

        fetchWhatsappNumber();
    }, []);

    const handleWhatsappNumberChange = async () => {
        try {
            const docRef = doc(fireDB, 'settings', 'contact');
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                await updateDoc(docRef, { whatsappNumber });
                toast.success('WhatsApp number updated!');
            } else {
                await setDoc(docRef, { whatsappNumber });
                alert('WhatsApp number initialized and updated!');
            }
        } catch (error) {
            console.error('Error updating WhatsApp number: ', error);
            alert('Failed to update WhatsApp number.');
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen p-5">
            {/* Top */}
            <div className="mb-8 px-4 py-6 bg-white shadow-md rounded-lg">
                <h1 className="text-center text-3xl font-semibold text-gray-700">Admin Dashboard</h1>
            </div>

            <div className="px-4">
                {/* Mid */}
                <div className="mb-8">
                    <div className="bg-white shadow-md rounded-lg border border-gray-200 p-6">
                        <div className="flex flex-col items-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="User Icon" className="w-24 h-24 mb-4" />
                            <div className="text-center">
                                <h1 className="text-xl font-semibold text-gray-700 mb-2">
                                    <span className="font-medium">Name: </span>{user?.name}
                                </h1>
                                <h1 className="text-xl font-semibold text-gray-700 mb-2">
                                    <span className="font-medium">Email: </span>{user?.email}
                                </h1>
                                <h1 className="text-xl font-semibold text-gray-700 mb-2">
                                    <span className="font-medium">Date: </span>{user?.date}
                                </h1>
                                <h1 className="text-xl font-semibold text-gray-700">
                                    <span className="font-medium">Role: </span>{user?.role}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div>
                    <Tabs>
                        <TabList className="flex flex-wrap mb-4">
                            {/* Total Products */}
                            <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                                <div className="border bg-white shadow-md hover:bg-gray-50 border-gray-200 px-4 py-3 rounded-lg flex items-center">
                                    <div className="text-pink-500 w-12 h-12 mb-3 mr-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={50}
                                            height={50}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-shopping-basket"
                                        >
                                            <path d="m5 11 4-7" />
                                            <path d="m19 11-4-7" />
                                            <path d="M2 11h20" />
                                            <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
                                            <path d="m9 11 1 9" />
                                            <path d="M4.5 15.5h15" />
                                            <path d="m15 11-1 9" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-semibold text-gray-700">{getAllProduct.length}</h2>
                                        <p className="text-gray-500 font-medium">Total Products</p>
                                    </div>
                                </div>
                            </Tab>

                            {/* Total Orders */}
                            <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                                <div className="border bg-white shadow-md hover:bg-gray-50 border-gray-200 px-4 py-3 rounded-lg flex items-center">
                                    <div className="text-pink-500 w-12 h-12 mb-3 mr-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={50}
                                            height={50}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-list-ordered"
                                        >
                                            <line x1={10} x2={21} y1={6} y2={6} />
                                            <line x1={10} x2={21} y1={12} y2={12} />
                                            <line x1={10} x2={21} y1={18} y2={18} />
                                            <path d="M4 6h1v4" />
                                            <path d="M4 10h2" />
                                            <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-semibold text-gray-700">{getAllOrder.length}</h2>
                                        <p className="text-gray-500 font-medium">Total Orders</p>
                                    </div>
                                </div>
                            </Tab>

                            {/* Total Users */}
                            <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                                <div className="border bg-white shadow-md hover:bg-gray-50 border-gray-200 px-4 py-3 rounded-lg flex items-center">
                                    <div className="text-pink-500 w-12 h-12 mb-3 mr-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={50}
                                            height={50}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-users"
                                        >
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                            <circle cx={9} cy={7} r={4} />
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-semibold text-gray-700">{getAllUser.length}</h2>
                                        <p className="text-gray-500 font-medium">Total Users</p>
                                    </div>
                                </div>
                            </Tab>
                        </TabList>

                        <TabPanel>
                            <ProductDetail />
                        </TabPanel>

                        <TabPanel>
                            <OrderDetail />
                        </TabPanel>

                        <TabPanel>
                            <UserDetail />
                        </TabPanel>
                    </Tabs>
                </div>

                {/* WhatsApp Number Update */}
                <div className="mt-10 bg-white shadow-md rounded-lg border border-gray-200 p-6">
                    <h2 className="text-2xl font-semibold mb-4">Update WhatsApp Number</h2>
                    <input
                        type="text"
                        value={whatsappNumber}
                        onChange={(e) => setWhatsappNumber(e.target.value)}
                        className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Enter WhatsApp Number"
                    />
                    <button
                        onClick={handleWhatsappNumberChange}
                        className="mt-4 bg-pink-500 text-white p-3 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
