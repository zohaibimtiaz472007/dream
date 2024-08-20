import { Timestamp, addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { fireDB, storage } from "../../firebase/FirebaseConfig";
import { useNavigate } from "react-router";
import Loader from "../../components/loader/Loader";

const AddProductPage = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        title: "",
        price: "",
        productImageUrl: "",
        category: "",
        description: "",
        quantity: 1,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
        }),
    });

    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const addProductFunction = async () => {
        if (
            product.title === "" ||
            product.price === "" ||
            product.description === "" ||
            !image
        ) {
            return toast.error("All fields are required");
        }

        setLoading(true);
        try {
            let imageUrl = "";

            if (image) {
                const storageRef = ref(storage, `productImages/${image.name}`);
                await uploadBytes(storageRef, image);
                imageUrl = await getDownloadURL(storageRef);
            }

            const productData = {
                ...product,
                productImageUrl: imageUrl,
            };

            const productRef = collection(fireDB, "products");
            await addDoc(productRef, productData);
            toast.success("Product added successfully");
            navigate("/admin-dashboard");
        } catch (error) {
            console.log(error);
            toast.error("Failed to add product");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            {loading && <Loader />}
            {/* Add Product Form */}
            <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 w-full max-w-md">
                <div className="mb-5">
                    <h2 className="text-center text-2xl font-bold text-gray-800">
                        Add Product
                    </h2>
                </div>

                {/* Input for Title */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={product.title}
                        onChange={(e) => setProduct({ ...product, title: e.target.value })}
                        placeholder="Product Title"
                        className="bg-gray-50 border border-gray-300 px-3 py-2 w-full rounded-md outline-none placeholder-gray-500"
                    />
                </div>

                {/* Input for Price */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={(e) => setProduct({ ...product, price: e.target.value })}
                        placeholder="Product Price"
                        className="bg-gray-50 border border-gray-300 px-3 py-2 w-full rounded-md outline-none placeholder-gray-500"
                    />
                </div>

                {/* Input for Image */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Product Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="bg-gray-50 border border-gray-300 px-3 py-2 w-full rounded-md outline-none"
                    />
                </div>

                {/* Input for Description */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Description</label>
                    <textarea
                        value={product.description}
                        onChange={(e) => setProduct({ ...product, description: e.target.value })}
                        name="description"
                        placeholder="Product Description"
                        rows="4"
                        className="bg-gray-50 border border-gray-300 w-full px-3 py-2 rounded-md outline-none placeholder-gray-500"
                    ></textarea>
                </div>

                {/* Add Product Button */}
                <div className="mb-4">
                    <button
                        onClick={addProductFunction}
                        type="button"
                        className="bg-gray-800 hover:bg-gray-700 w-full text-white py-2 rounded-md font-bold"
                    >
                        Add Product
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddProductPage;
