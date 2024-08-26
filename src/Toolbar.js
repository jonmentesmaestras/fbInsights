import React from 'react';
import './Toolbar.css'; // Import the CSS file

const Toolbar = () => {
    return (
        <div className="toolbar">
            <ul className="toolbar-menu">
                <li className="toolbar-item-selected">Post</li>
                <li className="toolbar-item">Smart</li>
                <li className="toolbar-item">Inbox</li>
                <li className="toolbar-item">Social</li>
                {/* Add more items as needed */}
            </ul>
        </div>
    );
};

export default Toolbar;
