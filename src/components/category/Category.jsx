import { useNavigate } from "react-router";

const category = [
    { image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png', name: 'fashion' },
    { image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png', name: 'shirt' },
    { image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png', name: 'jacket' },
    { image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png', name: 'mobile' },
    { image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png', name: 'laptop' },
    { image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png', name: 'shoes' },
    { image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png', name: 'home' },
    { image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png', name: 'books' }
];

const Category = () => {
    const navigate = useNavigate();
    return (
        <div className="py-8 px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.map((item, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col items-center space-y-2 cursor-pointer"
                        onClick={() => navigate(`/category/${item.name}`)}
                    >
                        <div className="relative w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-pink-500 transition transform hover:scale-105 hover:shadow-lg flex items-center justify-center">
                            <img src={item.image} alt={item.name} className="w-12 h-12 lg:w-16 lg:h-16 object-contain" />
                        </div>
                        <h1 className="text-sm lg:text-lg font-semibold text-gray-800 capitalize">{item.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Category;
