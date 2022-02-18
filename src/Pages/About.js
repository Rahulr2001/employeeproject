import React from 'react';
import './Pages.css'; 
import {Outlet, Link} from 'react-router-dom';
import './Component/Sidenavmenubar.css'

function About() {
    return (
    <div>
        <div className = 'editemp'>
        <div className='mainfont' >
            <h1>Manage Your Employee</h1>
        </div>
        <div className='navbutton'>
                   
            <Link to="/employee/empedit" className='searchbutton'> All Employee </Link> 
        
                   
            <Link  to="/employee/create-employee" className='createbutton' > Create Your Employee </Link> 
        
        </div>
        
        <Outlet/>
        </div>
        
      </div>
      
    );
}

export default About