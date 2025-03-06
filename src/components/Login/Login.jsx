import { Link } from 'react-router'
import styles from './Login.module.css'

export default function Login() {
    return (
        <>
        <main className={styles.loginMain}>
        <form action="#">
        <h2>Login</h2>
        <div className={styles.field}>
        <input type="email" name="email" id="email" placeholder="Email" />
        <label htmlFor="email">
        <i className="fa-solid fa-envelope" />
        Email
        </label>
        </div>
        <div className={styles.field}>
        <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        />
        <label htmlFor="password">
        <i className="fa-solid fa-key" />
        Password
        </label>
        </div>
        <a className={styles.loginBtn} href="#">
        Login
        </a>
        <p>
        Don&apos;t have an account? <Link to="/register">Sign up here</Link>
        </p>
        </form>
        </main>
        </>
        
    )
}