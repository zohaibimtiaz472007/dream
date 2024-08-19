const Testimonial = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mb-10 bg-gray-100">
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading */}
                    <h1 className="text-center text-4xl font-extrabold text-gray-800 mb-4">Testimonials</h1>
                    <h2 className="text-center text-xl font-semibold text-gray-600 mb-12">What our <span className="text-pink-500">customers</span> are saying</h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 w-full mb-6 p-4">
                            <div className="h-full bg-white p-8 rounded-lg shadow-lg text-center flex flex-col justify-between transform hover:scale-105 transition duration-300 ease-in-out">
                                <div>
                                    <img 
                                        alt="testimonial" 
                                        className="w-20 h-20 mb-8 object-cover object-center rounded-full border-4 border-pink-500 inline-block" 
                                        src="https://scontent.fisb5-2.fna.fbcdn.net/v/t39.30808-6/455348766_511360858095489_4394316939191445044_n.jpg?stp=dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHXLGq1Ppvtip9xgEl3UIRjF7jvg7eofpoXuO-Dt6h-mrLyHSky4DT1Gl9wFzYB-z2o5UamvxP2qqK1buTKKrg7&_nc_ohc=95asN6JeMxoQ7kNvgHoTvHa&_nc_ht=scontent.fisb5-2.fna&oh=00_AYAZkE7bJETnPru-Eb7_gm3ZNZEZWpqjDIN2oSKC0K_MNg&oe=66C76835" 
                                    />
                                    <p className="leading-relaxed text-base text-gray-700 mb-6">With Dream Fragrance, experience a scent that effortlessly fuses the past with the present. The nostalgic notes evoke a sense of familiarity, while modern undertones keep it fresh and intriguing. It’s the ideal fragrance for those who appreciate a unique blend of tradition and innovation</p>
                                </div>
                                <div>
                                    <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4"></span>
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg uppercase">Huzaifa Mughal</h2>
                                    <p className="text-gray-500 text-sm">Customer</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 w-full mb-6 p-4">
                            <div className="h-full bg-white p-8 rounded-lg shadow-lg text-center flex flex-col justify-between transform hover:scale-105 transition duration-300 ease-in-out">
                                <div>
                                    <img 
                                        alt="testimonial" 
                                        className="w-20 h-20 mb-8 object-cover object-center rounded-full border-4 border-pink-500 inline-block" 
                                        src="https://scontent.fisb5-1.fna.fbcdn.net/v/t39.30808-6/448994756_433719332892669_886795411650576676_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHoKp0x68VxbmqfoL1mJgjVX214_B9pWepfbXj8H2lZ6kvpdXqUc2N7Nb8MT_PBvdmf80Cc6RkRz0FluVcEdT3F&_nc_ohc=ycNXVWUnoy4Q7kNvgHEVDjf&_nc_ht=scontent.fisb5-1.fna&oh=00_AYAz-mAjF5ufpfyCjnbSXzvTrS0-s4pJQKR4B4sI86WjIw&oe=66C73AA4" 
                                    />
                                    <p className="leading-relaxed text-base text-gray-700 mb-6">Dream Fragrance is where classic allure meets modern sophistication. The scent is timeless yet fresh, offering a perfect balance of vintage warmth and contemporary elegance. It’s a fragrance that lingers, leaving a lasting impression of refined style and subtle complexity..</p>
                                </div>
                                <div>
                                    <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4"></span>
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg uppercase">Sayam Awan</h2>
                                    <p className="text-gray-500 text-sm">Customer</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 w-full mb-6 p-4">
                            <div className="h-full bg-white p-8 rounded-lg shadow-lg text-center flex flex-col justify-between transform hover:scale-105 transition duration-300 ease-in-out">
                                <div>
                                    <img 
                                        alt="testimonial" 
                                        className="w-20 h-20 mb-8 object-cover object-center rounded-full border-4 border-pink-500 inline-block" 
                                        src="https://scontent.fisb5-1.fna.fbcdn.net/v/t39.30808-6/448684946_1017322966658797_2075973619687684508_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFZbu4Iv14xFnY68dss8-jI6ueOu4jS143q5467iNLXjSe_22zMSzRH38kwWEj8Iu0lzaJgOcaiYVT2iMP9OaOW&_nc_ohc=31o35cLQTl8Q7kNvgGLeTG-&_nc_ht=scontent.fisb5-1.fna&oh=00_AYBqXRcebhaxo5qRZIZYDhN955-uO8kPfhaXdJtSdRIWNg&oe=66C74B5E" 
                                    />
                                    <p className="leading-relaxed text-base text-gray-700 mb-6">Dream Fragrance is a perfect blend of nostalgic charm and modern elegance. It captures the warmth of vintage notes with a contemporary twist, making it irresistibly unique. Each spritz feels like a journey through time, with layers of depth and sophistication. A must-have for anyone who appreciates a fragrance that stands out.</p>
                                </div>
                                <div>
                                    <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4"></span>
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg uppercase">Zohaib Imtiaz</h2>
                                    <p className="text-gray-500 text-sm">Customer</p>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Testimonial;
