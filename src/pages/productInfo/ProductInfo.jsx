import { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import { useParams } from "react-router";
import { fireDB } from "../../firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

const ProductInfo = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;
    const [product, setProduct] = useState(null);
    const [whatsappNumber, setWhatsappNumber] = useState('');
    const { id } = useParams();
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const getProductData = async () => {
        setLoading(true);
        try {
            const productTemp = await getDoc(doc(fireDB, "products", id));
            setProduct({ ...productTemp.data(), id: productTemp.id });
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const getWhatsappNumber = async () => {
        try {
            const docRef = doc(fireDB, 'settings', 'contact');
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setWhatsappNumber(docSnap.data().whatsappNumber || '');
            } else {
                console.log('No such document!');
            }
        } catch (error) {
            console.error("Error fetching WhatsApp number:", error);
        }
    };

    const addCart = (item) => {
        dispatch(addToCart(item));
        toast.success("Added to cart");
    };

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Deleted from cart");
    };

    useEffect(() => {
        getProductData();
        getWhatsappNumber();
    }, [id]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const handleWhatsAppOrder = () => {
        if (!whatsappNumber) {
            toast.error("WhatsApp number is not available");
            return;
        }
        const message = `I want to order the following product:\n\nName: ${product?.title}\nPrice: Rs ${product?.price}`;
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        if (isMobile) {
            window.location.href = whatsappUrl;
        } else {
            window.open(whatsappUrl, "_blank");
        }
    };

    return (
        <Layout>
            <section className="py-5 lg:py-16 font-poppins dark:bg-gray-800">
                {loading ? (
                    <div className="flex justify-center items-center">
                        <Loader />
                    </div>
                ) : (
                    <div className="max-w-6xl px-4 mx-auto">
                        <div className="flex flex-wrap mb-24 -mx-4">
                            <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                                <img
                                    className="w-full lg:h-[39em] rounded-lg"
                                    src={product?.productImageUrl}
                                    alt={product?.title}
                                />
                            </div>
                            <div className="w-full px-4 md:w-1/2">
                                <div className="lg:pl-20">
                                    <div className="mb-6">
                                        <h2 className="text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                                            {product?.title}
                                        </h2>
                                        <div className="flex flex-wrap items-center mb-6">
                                            {/* Rating stars */}
                                        </div>
                                        <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400">
                                            Rs {product?.price}
                                        </p>
                                    </div>
                                    <div className="mb-6">
                                        <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                                            Description:
                                        </h2>
                                        <p>{product?.description}</p>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-4">
                                        {cartItems.some((p) => p.id === product.id) ? (
                                            <button
                                                onClick={() => deleteCart(product)}
                                                className="w-full px-4 py-3 text-center text-white bg-red-500 border border-red-600 hover:bg-red-600 hover:text-gray-100 rounded-xl">
                                                Remove from Cart
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => addCart(product)}
                                                className="w-full px-4 py-3 text-center text-pink-600 bg-pink-100 border border-pink-600 hover:bg-pink-600 hover:text-gray-100 rounded-xl">
                                                Add to Cart
                                            </button>
                                        )}
                                        <button
                                            onClick={handleWhatsAppOrder}
                                            className="w-full px-4 py-3 text-center text-green-600 bg-green-100 border border-green-600 hover:bg-green-600 hover:text-gray-100 rounded-xl">
                                            Order on WhatsApp
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </Layout>
    );
};

export default ProductInfo;
