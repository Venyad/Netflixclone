import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { SMALL_IMG_BASE_URL } from "../utils/constants.js";
import { Trash } from "lucide-react";
import toast from "react-hot-toast";

const SearchHistoryPage = () => {
    const [searchHistory, setSearchHistory] = useState([]);
    useEffect(() => {
        const getSearchHistory = async () => {
            try {
                const res = await axios.get(`/api/v1/search/history`);
                setSearchHistory(res.data.content);
            } catch (error) {
                setSearchHistory([]);
            }
        };
        getSearchHistory();
    }, []);
    if (searchHistory?.length === 0) {
		return (
			<div className='bg-black min-h-screen text-white'>
				<Navbar />
				<div className='max-w-6xl mx-auto px-4 py-8'>
					<h1 className='text-3xl font-bold mb-8'>Search History</h1>
					<div className='flex justify-center items-center h-96'>
						<p className='text-xl'>No search history found</p>
					</div>
				</div>
			</div>
		);
	}
    return (
        <div className='bg-black text-white min-h-screen'>
            <Navbar />
            <div className='max-w-6xl mx-auto px-4 py-8'
            >
                <h1 className='text-3xl font-bold mb-8'>Search History</h1>
                <div  className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-4'>

                </div>
            </div>

        </div>
    )
}

export default SearchHistoryPage
