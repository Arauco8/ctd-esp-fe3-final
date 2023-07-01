import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import { useThemeContext } from './utils/GlobalContextTheme'

const Navbar = () => {
  const { theme, toggleTheme, imgTheme } = useThemeContext()

  const stylesTheme = {
    backgroundColor: theme === 'light' ? '#D8D9D9' : '#434243',
    color: theme === 'light' ? '#434243' : '#D8D9D9',
  } 

  return (
    <nav style={stylesTheme} className={styles.navbar}>
         <Link className={`${styles.logo} ${styles.links}`} style={stylesTheme} to='./'>
          <span>D</span><p>H DENTISTAS 🦷</p>
        </Link> 
      <Link className={styles.links} style={stylesTheme} to='./'>Home</Link>
      <Link className={styles.links} style={stylesTheme} to='./favs'>Favoritos</Link>
      <Link className={styles.links} style={stylesTheme} to='./contacto'>Contacto</Link>
      <div className={styles.contButton}>
        <button className={styles.button} onClick={toggleTheme}>
          <img src={imgTheme} alt='Theme icon' />
        </button>
      </div>
    </nav> 
  )
}

export default Navbar