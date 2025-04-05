import React from 'react'
import { useState } from "react";
import { useContentStore } from "../store/content.js";
import Navbar from "../components/Navbar";
import { Search } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";
import { ORIGINAL_IMG_BASE_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";


const SearchPage = () => {
    const [activeTab, setActiveTab] = useState("movie");
    const [searchTerm, setSearchTerm] = useState("");

    const [results, setResults] = useState([]);
    const { setContentType } = useContentStore();
    return (
        <div className='bg-black min-h-screen text-white'>
            <Navbar />
            <div className='container mx-auto px-4 py-8'>
                <div className='flex justify-center gap-3 mb-4'>
                    <button className={`py-2 px-4 rounded ${activeTab === "movie" ? "bg-red-600" : "bg-gray-800"
                        } hover:bg-red-700`}>
                        Movies
                    </button>
                    <button
                        className={`py-2 px-4 rounded ${activeTab === "tv" ? "bg-red-600" : "bg-gray-800"
                            } hover:bg-red-700`}
                    >
                        TV Shows
                    </button>
                    <button
                        className={`py-2 px-4 rounded ${activeTab === "person" ? "bg-red-600" : "bg-gray-800"
                            } hover:bg-red-700`}
                    >
                        Person
                    </button>

                </div>
            </div>
        </div>
    )
}

export default SearchPage
