import React from 'react'
import "./header.css"
import SearchIcon from '@mui/icons-material/Search';
import ContactsIcon from '@mui/icons-material/Contacts';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import logo from "../../assets/imags/logo.png"
function Header( ) {
  return (
    <div>
    <div className='outer-header'>
    
    <div className="left-header">
        <ul>
           <li className='netflex-logo'><img src={logo}/></li>
           <li>Home</li>
           <li>TVShows</li>
           <li>Movies</li>
           <li>Latest</li>
           <li>MyList</li>
           <li>Brows by Languages</li>
        </ul>
    </div>
    <div className="right-header">
        <ul>
        <li><SearchIcon /></li>
        <li><NotificationsNoneIcon /></li>
        <li><ContactsIcon /></li>
        <li><ArrowDropDownIcon  /></li>
          
           
        </ul>
    </div>
</div>
    
 
    
    
    </div>
  )
}

export default Header