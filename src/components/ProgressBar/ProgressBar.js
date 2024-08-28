import React from 'react';

const ProgressBar = ({ level}) => {
    const progress = Math.min((level %1) * 100, 100 );

    return (
        <div className='progress-bar'>
            <div className='progress' style={{ width : `${progress}%` }}></div>
        </div>
    );
};

export default ProgressBar;