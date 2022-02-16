import React from 'react';
import './Pages.css'; 
import {Outlet, Link} from 'react-router-dom'

function About() {
    return (
        <div className = 'editemp'>
        <div className='mainfont' >
            <h1>Manage Your Employee</h1>
        </div>
        <div className='navbutton'>
                   
            <Link to="/about/empedit" className='searchbutton'> All Employee </Link> 
        
                   
            <Link className='createbutton' to="/about/create-employee" > Create Your Employee </Link> 
        
        </div>
        <Outlet/>
      </div>
    );
}

export default About