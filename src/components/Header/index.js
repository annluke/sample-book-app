import { Link } from 'react-router-dom';
import styles from './styles.module.css'

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <h1 className={styles.heading}>Sample book app</h1>
      <ul className={styles.navWrapper}>
        <li className={styles.navItem}>
          <Link to='/'>All books</Link>
        </li>
        <li className={styles.navItem}>
          <Link to='/favorites'>Favorites</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
