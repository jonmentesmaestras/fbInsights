import React, { useState, useEffect } from 'react';
import WebForm from './WebForm';
import PageImpressions from './PageImpressions';

const MyPagePosts = () => {
    const [impressionsData, setImpressionsData] = useState([]);

    useEffect(() => {
        // Assuming you already have a way to fetch the data
        const fetchData = async () => {
            try {
                const response = await fetch('https://your-api-endpoint.com');
                const json = await response.json();
                setImpressionsData(json.data);
            } catch (error) {
                console.error('Error fetching impressions data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <WebForm />
            {impressionsData.length > 0 && (
                <PageImpressions data={impressionsData} />
            )}
        </div>
    );
};

export default MyPagePosts;
