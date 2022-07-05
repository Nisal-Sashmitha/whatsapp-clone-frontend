import React from 'react';
import '../Css/Sidebar.css';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar__header">
        <div className="sidebar__headerRight">
            <DonutLargeIcon/>
        </div>
        <div className="sidebar__headerLeft">
            
        </div>
      </div>
    </div>
  )
}

export default Sidebar
