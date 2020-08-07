import React from 'react';
const Sidebar = ({ text, array, current, setCurrent, insert, data }) => {
  return (

    <div className="sidebar-wrapper">
      <div>
        <input
          className="next-node-input fullwidth"
          type="number"
          name="current"
          value={current}
          onChange={e => setCurrent(e.target.value)}
          placeholder="Enter the value"
        />
        <button
          className="next-node-button fullwidth"
          disabled={!current || isNaN(current)}
          onClick={() => {
            insert(parseInt(current, 10));
            setCurrent('');
          }}
        >
          Add Node
        </button>
      </div>
    </div>
    
  );
};

export default Sidebar;
