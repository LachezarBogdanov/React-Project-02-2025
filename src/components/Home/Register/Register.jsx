import styles from './Register.module.css'

export default function Register (){
    return (
        <main>
        <form action="#">
        <h2>Register</h2>
        <div className={styles.field}>
        <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        required=""
        />
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
        required=""
        />
        <label htmlFor="password">
        <i className="fa-solid fa-key" />
        Password
        </label>
        </div>
        <div className={styles.field}>
        <input
        type="password"
        name="rePassword"
        id="rePassword"
        placeholder="Repeat Password"
        required=""
        />
        <label htmlFor="rePassword">
        <i className="fa-solid fa-key" />
        Repeat Password
        </label>
        </div>
        <a className={styles.registerBtn} href="#">
        Register
        </a>
        <p>
        Already have account? <a href="#">Sign in here</a>
        </p>
        </form>
        </main>
        
    )
}