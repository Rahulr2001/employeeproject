import React from 'react'
import './Sidenavmenubar.css'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import WorkIcon from '@mui/icons-material/Work'
import {NavLink} from 'react-router-dom'
function Sidenavmenubar() {
    return (
        <div className = 'side-nav'>
            <input type = 'checkbox' id = 'menu' />
            <label className = 'icon' htmlFor = 'menu'>
                <div className = 'menu'>
                    
                </div>
            </label>
            <nav>
                <ul>
                    <NavLink to ="/">
                        <li>
                            <HomeIcon className = 'icons'></HomeIcon>
                            <div className = 'menu-text'>
                                Home
                            </div>
                        </li>
                    </NavLink>
                    <NavLink to ="about" >
                        <li>
                            <InfoIcon className = 'icons'></InfoIcon>
                            <div className = 'menu-text'>
                                About
                            </div>
                        </li>
                    </NavLink>
                    <NavLink to ="/careers" >
                        <li>
                            <WorkIcon className = 'icons'></WorkIcon>
                            <div className = 'menu-text'>
                                Careers
                            </div>
                        </li>
                    </NavLink>
                   
                </ul>
            </nav>
        </div>
    )
}

export default Sidenavmenubar