import React, { useState } from 'react';

const WebForm = () => {
    const [formData, setFormData] = useState({
        message: '',
        // Keep other form fields here as needed
        field1: '',
        field2: '',
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccessMessage(''); // Clear any previous success message

        try {
            const response = await fetch('https://your-endpoint-url.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok && result.code === 200 && !result.error) {
                setSuccessMessage('Your message was successfully posted!');
                setFormData({
                    message: '',
                    // Reset other form fields as needed
                    field1: '',
                    field2: '',
                });
            } else {
                // Handle any errors here
                console.error('Error:', result.message || 'Unknown error occurred');
            }
        } catch (error) {
            console.error('Network error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="message">Message:</label>
                <input
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                />
            </div>
            {/* Example of additional fields */}
            <div>
                <label htmlFor="field1">Field 1:</label>
                <input
                    type="text"
                    name="field1"
                    value={formData.field1}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="field2">Field 2:</label>
                <input
                    type="text"
                    name="field2"
                    value={formData.field2}
                    onChange={handleInputChange}
                />
            </div>
            {/* Add any other form fields as needed */}
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            {successMessage && <p className="success-message">{successMessage}</p>}
        </form>
    );
};

export default WebForm;
