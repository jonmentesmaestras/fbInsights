import React from 'react';
import './PageImpressions.css'

const PageImpressions = ({ data }) => {
    return (
        <div className="page-impressions"> 
        <h2>Insights</h2>
            {data.map((item) => (
                <div key={item.id} className="impression-item">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <ul>
                        {item.values.map((value, index) => (
                            <li key={index}>
                                <strong>Date:</strong> {new Date(value.end_time).toLocaleDateString()} - <strong>Value:</strong> {value.value}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default PageImpressions;
