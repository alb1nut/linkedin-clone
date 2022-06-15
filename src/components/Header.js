import React from 'react'
import '../styles/Header.css'
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div className='header'>
      {/* Left Section */}
      <div className="header__left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" alt="linkedin logo" />
          <div className="header__search">
            <SearchIcon />
            <input type="text" placeholder='Search'/>
          </div>
      </div>
      {/* right section */}

      <div className="header__right">

      </div>
    </div>
  )
}

export default Header
