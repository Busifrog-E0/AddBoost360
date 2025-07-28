import React from 'react';

const SquareLoader = ({ size = 'sm', color = 'bg-white/30' }) => {
    const sizes = {
        sm: 'w-2.5 h-2.5',
        md: 'w-3.5 h-3.5',
        lg: 'w-5 h-5',
    };

    const dotSize = sizes[size];

    return (
        <div className="flex items-center space-x-1">
            <div className={`${dotSize} ${color} animate-bounce [animation-delay:-0.3s] rounded-none`} />
            <div className={`${dotSize} ${color} animate-bounce [animation-delay:-0.15s] rounded-none`} />
            <div className={`${dotSize} ${color} animate-bounce rounded-none`} />
        </div>
    );
};

export default SquareLoader;
