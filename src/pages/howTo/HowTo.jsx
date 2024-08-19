import React from "react";

const HowTo = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">How to Place an Order</h1>
        <ol className="space-y-6 text-gray-700">
          <li>
            <h2 className="text-2xl font-semibold mb-2">1. Click on the Login Button</h2>
            <p>On the homepage, locate and click on the "Login" button to access your account.</p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2">2. Sign Up for a New Account</h2>
            <p>If you don't have an account, select the "Sign Up" option.</p>
            <ul className="list-disc ml-5 mt-2">
              <li>Enter your email and a single name (e.g., Zohaib).</li>
              <li>Click on the "Sign Up" button to create your account.</li>
            </ul>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2">3. Log In to Your Account</h2>
            <p>After signing up, you will be redirected to the login page.</p>
            <ul className="list-disc ml-5 mt-2">
              <li>Enter the same email and password you used during sign up.</li>
              <li>Click on the "Login" button to access your account.</li>
            </ul>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2">4. Select and Order a Product</h2>
            <p>Once logged in, browse through the products.</p>
            <ul className="list-disc ml-5 mt-2">
              <li>Click on the product you wish to purchase.</li>
              <li>Add the product to your cart and proceed with the checkout process.</li>
            </ul>
          </li>
        </ol>
        <div className="mt-8 text-center">
          <p className="text-lg">If you need further assistance, feel free to contact our support team.</p>
        </div>
      </div>
    </div>
  );
};

export default HowTo;
