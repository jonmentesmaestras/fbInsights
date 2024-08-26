import React from 'react';
import './FanPageList.css';

const FanPageList = ({ fanPages, onFanPageClick }) => {
  return (
    <div className="fanpage-list">
      {fanPages.map((fanPage) => (
        <div
          key={fanPage.id}
          className="fanpage-item"
          onClick={() => onFanPageClick(fanPage.id, fanPage.name)}
        >
          <span className="fanpage-name">{fanPage.name}</span>
          <span className="fanpage-category">{fanPage.category}</span>
        </div>
      ))}
    </div>
  );
};

export default FanPageList;
