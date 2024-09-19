import React from 'react';
// import './PriorityWall.css';  // Link to CSS file

const PriorityWall = () => {
  return (
    <div className="priority-wall">
      <h2>Priority Wall</h2>
      <div className="priority-columns">
        <div className="priority-column">
          <input type="text" placeholder="Add" />
        </div>
        <div className="priority-column">
          <input type="text" placeholder="Add" />
        </div>
        <div className="priority-column">
          <input type="text" placeholder="Add" />
        </div>
    
      </div>
    </div>
  );
};

export default PriorityWall;
