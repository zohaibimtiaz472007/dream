import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const Login = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const navigate = useNavigate();

    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });

    const userLoginFunction = async () => {
        if (userLogin.email === "" || userLogin.password === "") {
            toast.error("All Fields are required");
            return;
        }

        setLoading(true);
        try {
            const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);

            try {
                const q = query(
                    collection(fireDB, "user"),
                    where('uid', '==', users.user.uid)
                );
                const data = onSnapshot(q, (QuerySnapshot) => {
                    let user;
                    QuerySnapshot.forEach((doc) => user = doc.data());
                    localStorage.setItem("users", JSON.stringify(user));
                    setUserLogin({
                        email: "",
                        password: ""
                    });
                    toast.success("Login Successfully");
                    setLoading(false);
                    if (user.role === "user") {
                        navigate('/user-dashboard');
                    } else {
                        navigate('/admin-dashboard');
                    }
                });
                return () => data;
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error("Login Failed");
        }
    }

    return (
        <div className='relative flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black'>
            {loading && <Loader />}
            {/* Login Form  */}
            <div className="bg-white p-8 border border-gray-300 rounded-lg shadow-lg max-w-md w-full mx-4 sm:mx-0">
                {/* Top Heading  */}
                <div className="mb-6 text-center">
                    <h2 className='text-2xl font-bold text-gray-800'>
                        Login
                    </h2>
                </div>

                {/* Input One  */}
                <div className="mb-4">
                    <input
                        type="email"
                        name="email"
                        placeholder='Email Address'
                        value={userLogin.email}
                        onChange={(e) => {
                            setUserLogin({
                                ...userLogin,
                                email: e.target.value
                            })
                        }}
                        className='bg-gray-100 border border-gray-300 px-4 py-2 w-full rounded-md outline-none placeholder-gray-500'
                    />
                </div>

                {/* Input Two  */}
                <div className="mb-6">
                    <input
                        type="password"
                        placeholder='Password'
                        value={userLogin.password}
                        onChange={(e) => {
                            setUserLogin({
                                ...userLogin,
                                password: e.target.value
                            })
                        }}
                        className='bg-gray-100 border border-gray-300 px-4 py-2 w-full rounded-md outline-none placeholder-gray-500'
                    />
                </div>

                {/* Login Button  */}
                <div className="mb-4">
                    <button
                        type='button'
                        onClick={userLoginFunction}
                        className='bg-blue-500 hover:bg-blue-600 w-full text-white py-2 rounded-md'>
                        Login
                    </button>
                </div>

                <div className="text-center">
                    <h2 className='text-gray-600'>Don't Have an account <Link className='text-blue-500 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>
            </div>
        </div>
    );
}

export default Login;
