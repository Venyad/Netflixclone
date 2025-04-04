import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { useContentStore } from "../store/content.js";

const WatchPage = () => {
    const { id } = useParams();
    const [trailers, setTrailers] = useState([]);
    const [currentTrailerIdx, setCurrentTrailerIdx] = useState(0);
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState({});
    const [similarContent, setSimilarContent] = useState([]);
    const { contentType } = useContentStore();
    return (
        <div>
            Watch
        </div>
    )
}

export default WatchPage
