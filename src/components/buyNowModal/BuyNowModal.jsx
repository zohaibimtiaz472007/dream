/* eslint-disable react/prop-types */
import {
    Button,
    Dialog,
    DialogBody,
} from "@material-tailwind/react";
import { useState } from "react";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    return (
        <>
            <Button
                type="button"
                onClick={handleOpen}
                className="w-full px-4 py-3 text-center text-black bg-gray-200 border border-gray-300 hover:bg-gray-300 hover:text-black rounded-md"
            >
                Buy now
            </Button>
            <Dialog open={open} handler={handleOpen} className="bg-white shadow-md rounded-lg max-w-md mx-auto">
                <DialogBody className="p-6 bg-gray-50">
                    <h2 className="text-center text-black font-semibold text-lg mb-4">Billing Information</h2>
                    <div className="mb-4">
                        <label className="block text-sm text-gray-600 mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={addressInfo.name}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    name: e.target.value
                                })
                            }}
                            placeholder='Enter your name'
                            className='bg-white border border-gray-300 px-3 py-2 w-full rounded-md outline-none text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-gray-400'
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm text-gray-600 mb-1">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={addressInfo.address}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    address: e.target.value
                                })
                            }}
                            placeholder='Enter your address'
                            className='bg-white border border-gray-300 px-3 py-2 w-full rounded-md outline-none text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-gray-400'
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm text-gray-600 mb-1">Pincode <span className="text-green-500 text-sm " >  (Enter 21300 for Mansehra)</span> </label>
                        <input
                            type="number"
                            name="pincode"
                            value={addressInfo.pincode}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    pincode: e.target.value
                                })
                            }}
                            placeholder='Enter your pincode'
                            className='bg-white border border-gray-300 px-3 py-2 w-full rounded-md outline-none text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-gray-400'
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm text-gray-600 mb-1">Mobile Number</label>
                        <input
                            type="text"
                            name="mobileNumber"
                            value={addressInfo.mobileNumber}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    mobileNumber: e.target.value
                                })
                            }}
                            placeholder='Enter your mobile number'
                            className='bg-white border border-gray-300 px-3 py-2 w-full rounded-md outline-none text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-gray-400'
                        />
                    </div>

                    <div className="mt-6">
                        <Button
                            type="button"
                            onClick={() => {
                                handleOpen();
                                buyNowFunction();
                            }}
                            className="w-full px-4 py-3 text-center text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                        >
                            Confirm Purchase
                        </Button>
                    </div>
                </DialogBody>
            </Dialog>
        </>
    );
}

export default BuyNowModal;
