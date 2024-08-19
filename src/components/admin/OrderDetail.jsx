import { useContext } from "react";
import myContext from "../../context/myContext";

const OrderDetail = () => {
    const context = useContext(myContext);
    const { getAllOrder, orderDelete } = context;

    // Group orders by user
    const groupedOrders = getAllOrder.reduce((acc, order) => {
        if (!acc[order.id]) {
            acc[order.id] = { ...order, cartItems: [] };
        }
        acc[order.id].cartItems.push(...order.cartItems);
        return acc;
    }, {});

    return (
        <div className="p-5 space-y-4">
            <h1 className="text-xl font-bold text-pink-300">All Orders</h1>

            {Object.values(groupedOrders).map((order) => {
                const {
                    id,
                    cartItems,
                    addressInfo,
                    email,
                    date,
                    status
                } = order;

                return (
                    <div
                        key={id}
                        className="bg-white shadow-lg rounded-lg p-4 border border-gray-200"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-bold text-pink-500">
                                Order ID: {id}
                            </h2>
                            <span
                                className={`px-3 py-1 text-sm font-medium ${
                                    status === 'Shipped'
                                        ? 'text-green-600 bg-green-200'
                                        : 'text-yellow-600 bg-yellow-200'
                                } rounded-full`}
                            >
                                {status}
                            </span>
                        </div>

                        {cartItems.map((item, index) => {
                            const {
                                productImageUrl,
                                title,
                                category,
                                price,
                                quantity
                            } = item;

                            return (
                                <div
                                    key={index}
                                    className="flex items-center justify-between mb-3 border-b border-gray-200 pb-3"
                                >
                                    <img
                                        src={productImageUrl}
                                        alt={title}
                                        className="w-16 h-16 object-cover rounded-md"
                                    />
                                    <div className="flex-1 mx-3">
                                        <h3 className="text-md font-semibold text-pink-600">
                                            {title}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            Category: {category}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Price: ₹{price}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Quantity: {quantity}
                                        </p>
                                        <p className="text-sm font-medium text-gray-800">
                                            Total: ₹{price * quantity}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}

                        <div className="mt-4">
                            <p className="text-sm text-gray-600">
                                Name: {addressInfo.name}
                            </p>
                            <p className="text-sm text-gray-600">
                                Address: {addressInfo.address}
                            </p>
                            <p className="text-sm text-gray-600">
                                Pincode: {addressInfo.pincode}
                            </p>
                            <p className="text-sm text-gray-600">
                                Phone Number: {addressInfo.mobileNumber}
                            </p>
                            <p className="text-sm text-gray-600">
                                Email: {email}
                            </p>
                            <p className="text-sm text-gray-600">
                                Date: {date}
                            </p>
                        </div>

                        <button
                            onClick={() => orderDelete(id)}
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                        >
                            Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default OrderDetail;
