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
  return (
    <div>
      
    </div>
  )
}

export default SearchHistoryPage
