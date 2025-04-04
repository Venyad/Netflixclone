import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import { useContentStore } from "../store/content.js";

const WatchPage = () => {
    const { id } = useParams();
    const [trailers, setTrailers] = useState([]);
    const [currentTrailerIdx, setCurrentTrailerIdx] = useState(0);
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState({});
    const [similarContent, setSimilarContent] = useState([]);
    const { contentType } = useContentStore();

    useEffect(() => {
		const getTrailers = async () => {
			try {
				const res = await axios.get(`/api/v1/${contentType}/${id}/trailers`);
				setTrailers(res.data.trailers);
			} catch (error) {
				if (error.message.includes("404")) {
					setTrailers([]);
				}
			}
		};

		getTrailers();
	}, [contentType, id]);
    useEffect(() => {
		const getSimilarContent = async () => {
			try {
				const res = await axios.get(`/api/v1/${contentType}/${id}/similar`);
				setSimilarContent(res.data.similar);
			} catch (error) {
				if (error.message.includes("404")) {
					setSimilarContent([]);
				}
			}
		};

		getSimilarContent();
	}, [contentType, id]);
    useEffect(() => {
		const getContentDetails = async () => {
			try {
				const res = await axios.get(`/api/v1/${contentType}/${id}/details`);
				setContent(res.data.content);
			} catch (error) {
				if (error.message.includes("404")) {
					setContent(null);
				}
			} finally {
				setLoading(false);
			}
		};

		getContentDetails();
	}, [contentType, id]);
    return (
        <div>
            Watch
        </div>
    )
}

export default WatchPage
