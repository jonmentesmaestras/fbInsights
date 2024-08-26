import React, { useState } from 'react';
import './WebForm.css';

const WebForm = ({ pageId, fanPageName, onCancel }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      pageId: pageId,
      message: message,
    };

    fetch('http://localhost:3002/sendmessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        alert('Your message was posted')
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="webform-container">
      <h2>{fanPageName}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="message">Type a message to post:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
          />
        </div>
        <input type="hidden" name="pageId" value={pageId} />
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
      {
        pageId === '146771728516882' && (<a href='https://www.facebook.com/profile.php?id=61552140546298' target='_blank'>go To Fan Page to see your Posts</a>)
      }
      


    </div>
  );
};

export default WebForm;
