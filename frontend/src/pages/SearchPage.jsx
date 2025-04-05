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
    <div>
      
    </div>
  )
}

export default SearchPage
