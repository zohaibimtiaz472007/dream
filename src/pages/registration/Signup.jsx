import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";

const Signup = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const navigate = useNavigate();

    const [userSignup, setUserSignup] = useState({
        name: "",
        email: "",
        password: "",
        role: "user"
    });

    const userSignupFunction = async () => {
        if (userSignup.name === "" || userSignup.email === "" || userSignup.password === "") {
            toast.error("All Fields are required");
            return;
        }

        if (userSignup.password.length < 6) {
            toast.error("Make password of more than 6 characters");
            return;
        }

        setLoading(true);
        try {
            const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

            const user = {
                name: userSignup.name,
                email: users.user.email,
                uid: users.user.uid,
                role: userSignup.role,
                time: Timestamp.now(),
                date: new Date().toLocaleString(
                    "en-US",
                    {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }
                )
            }

            const userRefrence = collection(fireDB, "user");
            await addDoc(userRefrence, user);

            setUserSignup({
                name: "",
                email: "",
                password: ""
            });

            toast.success("Signup Successfully");

            setLoading(false);
            navigate('/login');
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error("Signup Failed");
        }
    }

    return (
        <div className='relative flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black'>
            {loading && <Loader />}
            {/* Signup Form  */}
            <div className="bg-white p-8 border border-gray-300 rounded-lg shadow-lg max-w-md w-full mx-4 sm:mx-0">
                {/* Top Heading  */}
                <div className="mb-6 text-center">
                    <h2 className='text-2xl font-bold text-gray-800'>
                        Signup
                    </h2>
                </div>

                {/* Input One  */}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder='First Name'
                        value={userSignup.name}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                name: e.target.value
                            });
                        }}
                        className='bg-gray-100 border border-gray-300 px-4 py-2 w-full rounded-md outline-none placeholder-gray-500'
                    />
                </div>

                {/* Input Two  */}
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder='Email Address'
                        value={userSignup.email}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                email: e.target.value
                            });
                        }}
                        className='bg-gray-100 border border-gray-300 px-4 py-2 w-full rounded-md outline-none placeholder-gray-500'
                    />
                </div>

                {/* Input Three  */}
                <div className="mb-6">
                    <input
                        type="password"
                        placeholder='Password'
                        value={userSignup.password}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                password: e.target.value
                            });
                        }}
                        className='bg-gray-100 border border-gray-300 px-4 py-2 w-full rounded-md outline-none placeholder-gray-500'
                    />
                </div>

                {/* Signup Button  */}
                <div className="mb-6">
                    <button
                        type='button'
                        onClick={userSignupFunction}
                        className='bg-blue-500 hover:bg-blue-600 w-full text-white py-2 rounded-md'>
                        Signup
                    </button>
                </div>

                <div className="text-center">
                    <h2 className='text-gray-600'>Already have an account? <Link className='text-blue-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>
            </div>
        </div>
    );
}

export default Signup;
