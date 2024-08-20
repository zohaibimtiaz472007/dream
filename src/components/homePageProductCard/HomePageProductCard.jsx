import { useNavigate } from "react-router";
import myContext from "../../context/myContext";
import { useContext, useEffect, useState } from "react";
import Loader from "../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";
import { doc, getDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig"; // Adjust import path as necessary

const HomePageProductCard = () => {
  const navigate = useNavigate();
  const context = useContext(myContext);
  const { loading, getAllProduct } = context;
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [whatsappNumber, setWhatsappNumber] = useState('');

  useEffect(() => {
    const fetchWhatsappNumber = async () => {
      const docRef = doc(fireDB, 'settings', 'contact'); // Adjust collection and document ID as necessary
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setWhatsappNumber(docSnap.data().whatsappNumber || '');
      } else {
        console.log('No such document!');
      }
    };

    fetchWhatsappNumber();
  }, []);

  const addCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Added to cart");
  };

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Deleted from cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleWhatsAppOrder = (item) => {
    const message = `I want to order the following product:\n\nName: ${item.title}\nPrice: Rs ${item.price}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="mt-10">
      <div className="">
        <h1 className="text-center mb-5 text-2xl font-semibold">
          Best Fragrance
        </h1>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex justify-center">{loading && <Loader />}</div>
          <div className="flex flex-wrap -m-4">
            {getAllProduct.slice(0, 8).map((item, index) => {
              const { id, title, price, productImageUrl } = item;
              return (
                <div key={index} className="p-4 w-full md:w-1/4">
                  <div className="h-full border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-white">
                    <div className="relative group">
                      <img
                        onClick={() => navigate(`/productinfo/${id}`)}
                        className="lg:h-80 h-96 w-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                        src={productImageUrl}
                        alt="Product"
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-500">
                        Dream Fragrance
                      </h2>
                      <h1 className="title-font text-lg font-semibold text-gray-900">
                        {title.substring(0, 25)}
                      </h1>
                      <div className="flex items-center justify-between">
                        <h1 className="text-xl font-bold text-gray-900">
                          Rs {price}
                        </h1>
                      </div>

                      <div className="flex flex-col space-y-2">
                        {cartItems.some((p) => p.id === item.id) ? (
                          <button
                            onClick={() => deleteCart(item)}
                            className="bg-red-700 hover:bg-red-600 w-full text-white py-2 rounded-lg font-bold text-sm"
                          >
                            Remove from Cart
                          </button>
                        ) : (
                          <button
                            onClick={() => addCart(item)}
                            className="bg-pink-500 hover:bg-pink-600 w-full text-white py-2 rounded-lg font-bold text-sm"
                          >
                            Add to Cart
                          </button>
                        )}
                        <button
                          onClick={() => handleWhatsAppOrder(item)}
                          className="bg-green-500 hover:bg-green-600 w-full text-white py-2 rounded-lg font-bold text-sm"
                        >
                          Order on WhatsApp
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePageProductCard;
