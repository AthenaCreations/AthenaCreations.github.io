import React from 'react';
import {NavLink} from 'react-router-dom';
const Nav = ({match}) =>{
  //display component for navigation
  return(
  <nav>
    <NavLink exact to='/'>Home</NavLink>
    <NavLink to='/portfolio'>Projects</NavLink>
    <NavLink to='/references'>References</NavLink>
    <NavLink to='/contact'>Contact</NavLink>
    <NavLink to='/blog'>Blog</NavLink>
  </nav>);
}
export default Nav;
