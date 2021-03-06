import React from 'react';

const GradientButton = ({ children }) => {
    return (
        <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">
            {children || "Get Started"}
        </button>
    );
};

export default GradientButton;