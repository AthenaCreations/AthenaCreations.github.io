import React from 'react';
import Nav from './nav';

const Header = props =>{
  return (
    //display component for header
    <header>
        <a id="myName" href=".">Athena Marie Ozanich</a>
        <Nav/>
    </header>
  );
}
export default Header;
