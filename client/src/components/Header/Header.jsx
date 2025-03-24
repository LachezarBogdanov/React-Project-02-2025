import { Link, NavLink } from 'react-router'
import styles from './Header.module.css'
import useAuth from '../../hooks/useAuth'

export default function Header (){
  const { isAuthenticated } = useAuth();

    return (
        <header>
        <nav>
          <Link className={styles.logo} to="/">WHEYPRO</Link>
          <ul>
            <li><NavLink
                to="/"
                className={({isActive}) => isActive ? styles.active : {}}
                >
                    HOME
                </NavLink>
            </li>
            <li><NavLink
                 to="/shop"
                  className={({isActive}) => isActive ? styles.active : {}}
                 >
                    SHOP
                </NavLink>
            </li>

            {isAuthenticated
                ? (
                <>
                <li><NavLink
                    to="/create"
                    className={({isActive}) => isActive ? styles.active : {}}
                    >
                        ADD PRODUCT
                    </NavLink>
                </li>
                <li><NavLink
                    to="/logout"
                    className={({isActive}) => isActive ? styles.active : {}}
                    >
                        LOGOUT
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/favourites" className={({isActive}) => isActive ? styles.active : {}}>
                    <i className='fa-solid fa-heart' />
                    </NavLink>
                </li>
                </>
                )
                : (
                <>
                <li><NavLink
                    to="/login"
                    className={({isActive}) => isActive ? styles.active : {}}
                    >
                        LOGIN
                    </NavLink>
                </li>
                <li><NavLink
                    to="/register"
                    className={({isActive}) => isActive ? styles.active : {}}
                    >
                        REGISTER
                    </NavLink>
                </li>
                </>
                )
            }

            <li>
              <NavLink to="/cart" className={({isActive}) => isActive ? styles.active : {}}>
                <i className="fa-solid fa-cart-shopping" />
              </NavLink>
            </li>

          </ul>
        </nav>
      </header>     
    )
}