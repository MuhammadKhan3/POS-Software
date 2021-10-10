import React from 'react'
import { NavLink } from 'react-router-dom';
import './HeaderNavbar.css'
import { Link } from 'react-router-dom';
import ProfilePic from '../profilepicture/userprofile.jpg'
import Menu from '../Main/Menu';
import SideBarMenu from '../SideMenu/SideBarMenu';
import { useState } from 'react';
const HeaderNavbar=()=>{
    const [toggle,settoggle]=useState(false);
    return (<>
    <Menu toggle={toggle} settoggle={settoggle}/>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <div className="container-fluid">
          <div className='brand'>
             <h4 className="navbar-brand text-success" href="#">Pos Software</h4>
          </div>
          <div>
             <div className="profilepic">
                <img src={ProfilePic} className="rounded-circle" alt="Cinque Terre" width="50" height="50"/>
             </div>
             <div className="profilenav">
                <h5 className="nav-item dropdown">
                    <Link to="#" className="nav-link dropdown-toggle text-success" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Owner
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link to="/Profile" className="dropdown-item" >Profile</Link></li>
                        <li><Link to="#" className="dropdown-item" >Mode</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link to="/Signup" className="dropdown-item" >Signup</Link></li>
                        <li><Link to="#" className="dropdown-item" >Logout</Link></li>
                    </ul>
                </h5>    
              </div>        
            </div>
       </div>
   </nav>
   {toggle && <SideBarMenu/>}
    </>);
}
export default HeaderNavbar;