import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/noPage/NoPage";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
import CartPage from "./pages/cart/CartPage";
import AllProduct from "./pages/allProduct/AllProduct";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProductPage from "./pages/admin/AddProductPage";
import UpdateProductPage from "./pages/admin/UpdateProductPage";
import MyState from "./context/myState";
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";
import CategoryPage from "./pages/category/CategoryPage";
import AboutPage from "./pages/About/AboutPage";
import FAQs from "./pages/FAQs/FAQs";
import ShippingAndReturns from "./pages/returns/Returns";
import OrderTracking from "./pages/orderTracking/OrderTracking";
import HowTo from "./pages/howTo/HowTo";
import Login from './pages/registration/Login'
import Signup from './pages/registration/Signup'
const App = () => {
  return (
    <MyState>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/returns" element={<ShippingAndReturns />} />
          <Route path="/order" element={<OrderTracking />} />
          <Route path="/how-to" element={<HowTo />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element = {<Signup/>}  />
          <Route path="/category/:categoryname" element={<CategoryPage />} />  {/* category Page route */}
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/admin-dashboard" element={
            <ProtectedRouteForAdmin>
              <AdminDashboard />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/addproduct" element={
            <ProtectedRouteForAdmin>
              <AddProductPage />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/updateproduct/:id" element={
            <ProtectedRouteForAdmin>
              <UpdateProductPage />
            </ProtectedRouteForAdmin>
          } />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  );
};

export default App;
