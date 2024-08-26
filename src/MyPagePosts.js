import React, { useState, useEffect } from 'react';
import FanPageList from './FanPageList';
import WebForm from './WebForm';
import PageImpressions from './PageImpressions';
import './MyPagePosts.css';

const MyPagePosts = () => {
  const [fanPages, setFanPages] = useState([]);
  const [selectedPageId, setSelectedPageId] = useState(null);
  const [selectedFanPageName, setSelectedFanPageName] = useState('');
  const [formVisible, setFormVisible] = useState(false);
  const [insightsVisible, setInsightsVisible] = useState(false);

  const [impressionsData, setImpressionsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch fanpages data from the API using fetch
    fetch('http://localhost:3002/getlist')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.data) {
          setFanPages(data.data);
        }
      })
      .catch((error) => {
        console.error('There was an error fetching the fanpages!', error);
      });
  }, []);

  const handleFanPageClick = async (pageId, fanPageName) => {
    setSelectedPageId(pageId);
    setSelectedFanPageName(fanPageName);
    setFormVisible(true);
    setLoading(true);

    try {
        const response = await fetch(`http://localhost:3002/insights?pageId=${pageId}`);
        const json = await response.json();
        console.log("the json response is", json)

        setImpressionsData(json.data.data);

    } catch (error) {
        console.error('Error fetching impressions data:', error);
    } finally {
        setLoading(false);
    }
    

  };

  const handleCancel = () => {
    setFormVisible(false);
    setInsightsVisible(false)
    setSelectedPageId(null);
    setSelectedFanPageName('');
  };

  return (
    <div className="page-posts-container">
      <div className="sidebar">
        <h2>Insights</h2>
        <div className="search-bar">
          <input type="text" placeholder="Search accounts" />
        </div>
        <FanPageList
          fanPages={fanPages}
          onFanPageClick={(pageId, fanPageName) =>
            handleFanPageClick(pageId, fanPageName)
          }
        />
      </div>
      <div className="main-content">
        {formVisible ? (
          <WebForm
            pageId={selectedPageId}
            fanPageName={selectedFanPageName}
            onCancel={handleCancel}
          />
          
          
          
        ) : (
        <h3>No page selected.</h3>
        )}
        
        {formVisible ? (Array.isArray(impressionsData) && impressionsData.length > 0 && (
                        <PageImpressions data={impressionsData} />)):(<h2>Do not have permission to see the Statistics</h2>)}
        
        

      </div>
    </div>
  );
};

export default MyPagePosts;
