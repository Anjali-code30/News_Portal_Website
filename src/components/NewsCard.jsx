import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NewsCard = ({news}) => {
    const navigate = useNavigate();

    const[bookMarked , setBookMarked] = useState(false);
    return(
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <img src={news.image} alt="loading" className="w-full h-55" />
            <div>
                <p className="text-red-600 text-sm">{news.source.name}</p>
                <h2 className="text-xl font-bold mt-2 line-clamp-2">{news.title}</h2>
                <p className="text-gray-600 mt-3 text-justify line-clamp-4">{news.description}</p>
                <p className="text-gray-400 mt-4">{new Date(news.publishedAt).toLocaleDateString()}</p>
                <button className="mt-4 bg-red-600 px-5 py-2 rounded-lg text-white hover:bg-red-700" 
                onClick={() => navigate (`/news/${news.id} ` , {state : {news}})}>Read More</button>

                <button className={`px-5 py-2 rounded-lg ml-5 text-white ${bookMarked ? "bg-yellow-500 " : "bg-red-600"}`}>{bookMarked ? "Saved" : "Bookmark"}</button>
            </div>
        </div>
    );
};

export default NewsCard;