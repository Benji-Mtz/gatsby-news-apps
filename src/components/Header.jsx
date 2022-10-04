import { Link } from 'gatsby'
import React from 'react'

// import { headerTitle  } from './Header.module.scss';
import * as headerStyles from './Header.module.scss';

const Header = () => {
  return (
    <div>
        <h1 className={ headerStyles.headerTitle }>I'm Header</h1>
        <h2 className={ headerStyles.headerSubtitle }>Other Header</h2>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/noexiste">No existe</Link>
    </div>
  )
}

export default Header