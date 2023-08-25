import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import SourceFilter from './SourceFilter';
import NewsList from './NewsList';
import axios from 'axios';

function Home() {
    const [news, setNews] = useState([]);
    const [filteredNews, setFilteredNews] = useState([]);
    const [sources, setSources] = useState([]);

    const handleSearch = searchTerm => {
        const filtered = news.filter(item => item.title.toLowerCase().includes(searchTerm));
        setFilteredNews(filtered);
    };

    const handleSourceFilter = selectedSources => {
        const filtered = news.filter(item => selectedSources.includes(item.source.name));
        setFilteredNews(filtered);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const url = `${process.env.REACT_APP_BASE_API_URL}/api/get-source`;
        try {
            axios.get(url).then((response) => {
                setSources(response.data);
              });
        } catch (error) {
            console.log(error, 'error');
        }
    }, []);

    useEffect(() => {
        const url = `${process.env.REACT_APP_BASE_API_URL}/api/search`;
        const bodyData = {
            searchTerm: "",
            selectedSources: ""
        }
        try {
            
            axios.post(url, bodyData).then((response) => {
                setNews(response.data);
                setFilteredNews(response.data);
              });
        } catch (error) {
            console.log(error, 'error');
        }
    }, []);

    return (
        <div>
            <h1>News App</h1>
            <SearchBar onSearch={handleSearch} />
            <SourceFilter sources={sources} onSourceFilter={handleSourceFilter} />
            <NewsList news={filteredNews} />
        </div>
    );
}

export default Home;
