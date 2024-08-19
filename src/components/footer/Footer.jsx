import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-black to-gray-900 text-gray-300 body-font">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                {/* Left Section */}
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                        <span className="ml-3 text-xl">Dream Fragrance</span>
                    </a>
                    <p className="mt-2 text-sm text-gray-500">The ultimate destination for luxury perfumes and fragrances.</p>
                </div>

                {/* Middle Section */}
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    {/* Column 1 */}
                    

                    {/* Column 2 */}
                    

                    {/* Column 3 */}
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">SUPPORT</h2>
                        <nav className="list-none mb-10">
                            <li><Link to={'/contact'} className="text-gray-400 hover:text-white">Contact Us</Link></li>
                            <li><Link to={'/faqs'} className="text-gray-400 hover:text-white">FAQs</Link></li>
                            <li><Link to={'/returns'} className="text-gray-400 hover:text-white">Shipping & Returns</Link></li>
                            <li><Link to={'/order'} className="text-gray-400 hover:text-white">Order Tracking</Link></li>
                        </nav>
                    </div>

                    {/* Column 4 */}
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Tutorial</h2>
                        <nav className="list-none mb-10">
                            <li><Link to={'/how-to'} className="text-gray-400 hover:text-white">How to Place an Order</Link></li>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-black bg-opacity-50">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">© 2024 Dream Fragrance —
                        <a href="https://twitter.com/dreamfragrance" rel="noopener noreferrer" className="text-gray-400 ml-1" target="_blank">@dreamfragrance</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a className="text-gray-400 hover:text-white">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18.36 5.64a9 9 0 11-12.72 0A9 9 0 0118.36 5.64z"></path>
                                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-400 hover:text-white">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M22 12h-6v8H8v-8H2V8h6V2h8v6h6v4z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-400 hover:text-white">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M16 8a6 6 0 11-12 0 6 6 0 0112 0zM8 14v8m4-8v8m6-8v8"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-400 hover:text-white">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M20 13V9a1 1 0 00-1-1h-3V4a1 1 0 00-1-1H9a1 1 0 00-1 1v4H5a1 1 0 00-1 1v4a1 1 0 001 1h3v4a1 1 0 001 1h6a1 1 0 001-1v-4h3a1 1 0 001-1zM9 4h6v4H9V4z"></path>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
