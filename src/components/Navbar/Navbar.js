import React, {useState} from 'react';
import  './Navbar.css'
import { MenuList } from './MenuList';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    const menuList = MenuList.map(({url, title}, index) => {
        return (
            <li key={index}>
                <NavLink to={url} className="active" >{title}</NavLink>
            </li>
        )
    })

    const handleClick = () => {
        setClicked(!clicked);
    }
    
    return ( 
        <nav>
            <div className="logo">
                VPN<font>Lab</font>
            </div>
            <div className="menu_icon" onClick={handleClick}>
                <i className={ clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={clicked ? "menu_list" : "menu_list close" }>{menuList}</ul>
        </nav>
     );
}
 
export default Navbar;