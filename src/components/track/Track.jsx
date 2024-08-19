const Track = () => {
    return (
        <section>
            <div className="container mx-auto px-5 py-10 md:py-14">
                {/* Main Container */}
                <div className="flex flex-wrap -m-4 text-center">
                    {/* Track 1 */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg">
                            <svg className="text-pink-600 w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 10V7a2 2 0 00-4 0v3a2 2 0 01-4 0V7a6 6 0 0112 0v3a2 2 0 01-4 0z" />
                            </svg>
                            <h2 className="title-font font-medium text-lg text-gray-900">Luxury Fragrance</h2>
                            <p className="leading-relaxed">Experience the essence of luxury with our premium fragrances.</p>
                        </div>
                    </div>

                    {/* Track 2 */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg">
                            <svg className="text-pink-600 w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 12V8a4 4 0 10-8 0v4a4 4 0 00-2 3.5v2.5a4 4 0 004 4h4a4 4 0 004-4v-2.5a4 4 0 00-2-3.5zM10 12V8a2 2 0 114 0v4" />
                            </svg>
                            <h2 className="title-font font-medium text-lg text-gray-900">Long-Lasting Scent</h2>
                            <p className="leading-relaxed">Our fragrances ensure you stay refreshed all day long.</p>
                        </div>
                    </div>

                    {/* Track 3 */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg">
                            <svg className="text-pink-600 w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m4-4H8" />
                            </svg>
                            <h2 className="title-font font-medium text-lg text-gray-900">Affordable Elegance</h2>
                            <p className="leading-relaxed">Enjoy the elegance of high-end fragrance at a price you'll love.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Track;
