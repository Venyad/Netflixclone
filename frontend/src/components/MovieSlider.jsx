import React from 'react'
import { useContentStore } from "../store/content.js";
import axios from "axios";
import { Link } from "react-router-dom";
import { SMALL_IMG_BASE_URL } from "../utils/constants.js";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MovieSlider = ({ category }) => {
  const { contentType } = useContentStore();
  return (
    <div>
      Movie Slider
    </div>
  )
}

export default MovieSlider
