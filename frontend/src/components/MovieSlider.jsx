import React from 'react'
import { useContentStore } from "../store/content.js";
import axios from "axios";
import { Link } from "react-router-dom";
import { SMALL_IMG_BASE_URL } from "../utils/constants.js";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MovieSlider = ({ category }) => {
  const { contentType } = useContentStore();
  const [content, setContent] = useState([]);
	const [showArrows, setShowArrows] = useState(false);
  const sliderRef = useRef(null);

	const formattedCategoryName =
		category.replaceAll("_", " ")[0].toUpperCase() + category.replaceAll("_", " ").slice(1);
	const formattedContentType = contentType === "movie" ? "Movies" : "TV Shows";
  useEffect(() => {
		const getContent = async () => {
			const res = await axios.get(`/api/v1/${contentType}/${category}`);
			setContent(res.data.content);
		};

		getContent();
	}, [contentType, category]);

  return (
    <div>
      Movie Slider
    </div>
  )
}

export default MovieSlider
