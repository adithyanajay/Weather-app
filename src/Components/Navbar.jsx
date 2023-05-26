import React from 'react'
//import { ReactSVG } from 'react-svg';
import '../sass/components/navbar.scss';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import Logo from '../Assets/icon-img.png'
import { IconContext } from "react-icons"; 
import { TiWeatherPartlySunny  } from 'react-icons/ti';
import { TfiMenuAlt } from 'react-icons/tfi'
import { BsMapFill } from 'react-icons/bs'
import { IoMdSettings } from 'react-icons/io'


export default function Navbar() {


  const logo = <img src= {Logo} alt="logo" className='logo'/>
  const Navicon = ({Logo, text, to}) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return(
      <div className="nav-element">
        <IconContext.Provider value={{className:`nav-element-icon ${isActive ? "active": ""}`}}>{Logo}</IconContext.Provider>
        <p className={`nav-element-text ${isActive ? "active": ""}`}>{text}</p>
      </div>
    )
  }
  return (
    <div className='nav'>
      <ul className='nav-elements'>
        <li><Link to={"/"}>{logo}</Link></li>
        <li><Link to={"/"}><Navicon Logo={<TiWeatherPartlySunny />} text="Weather" to={"/"}/></Link></li>
        <li><Link to={"/cities"}><Navicon Logo={<TfiMenuAlt />} text={'Cities'} to={"/cities"}/></Link></li>
        <li><Link to={"/maps"}><Navicon Logo={<BsMapFill />} text={'Map'} to={"/maps"}/></Link></li>
        <li><Link to={"/settings"}><Navicon Logo={<IoMdSettings />} text={'Settings'} to={"/settings"}/></Link></li>
      </ul>
    </div>
  )
}
