import React from 'react';
import {ReactNavbar} from "overlay-navbar";
import logo from "../../images/portfolio.jpg";

const Header = () => {
  return (
    <div className='navbar'>
        <ReactNavbar 
        navColor1= "white" 
        navColor2= "hsl(219, 48%, 8%)"
        burgerColor= "hsl(250, 100%, 75%)"
        nav2justifyContent= "space-between"
        nav3justifyContent= "space-between"
        logo= {logo}
        logoWidth= "200px"
        logoHoverColor="hsl(250, 100%, 75%)"
        logoHeight="150px"
        link1Text="Accueil"
        link2Text="Mon CV"
        link3Text="Projects"
        link4Text="Contact"
        link1Url="/"
        link2Url="/moncv"
        link3Url="/projects"
        link4Url="/contact"
        link1ColorHover="white"
        link1Color="hsl(250, 100%, 75%)"
        link1Size= "1.5rem"

        />
    </div>
  )
}

export default Header