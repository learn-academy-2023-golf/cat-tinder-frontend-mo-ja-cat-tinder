import React from 'react';
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
<> 
<h2> Cat Tinder!</h2>
<header> 
    <Nav> 
        <NavItem>
            <NavLink to="/"> 
                Home
            </NavLink> 
        </NavItem>
        <NavItem>
            <NavLink to="/catindex">
                Let's take a look!
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/catnew">
                Start today!
            </NavLink>
        </NavItem>
    </Nav>
</header>
</>
  )
}

export default Header;
