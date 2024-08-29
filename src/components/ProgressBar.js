import React from 'react';

function ProgressBar({ level }) {
  return (
    <div style={{ width: '80%', backgroundColor: '#444', borderRadius: '5px', margin: '20px' }}>
      <div style={{
        width: `${(level / 10) * 100}%`,
        height: '10px',
        backgroundColor: '#fff',
        borderRadius: '5px'
      }}></div>
    </div>
  );
}

export default ProgressBar