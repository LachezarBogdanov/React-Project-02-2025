import { Link, useNavigate } from 'react-router'

import { useLogin } from '../../api/authApi';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

import styles from './Login.module.css'

export default function Login() {
    const { login } = useLogin();
    const { userLoginHandler } = useContext(UserContext);
    const navigate = useNavigate();

    const loginHandler = async (formData) => {
        const values = Object.fromEntries(formData);

        const authData = await login(values.email, values.password);

        userLoginHandler(authData);

        navigate('/');
        
        return values;
    }   
    return (
        <>
            <main className={styles.loginMain}>
        <form action={loginHandler}>
            <h2>Login</h2>

            <div className={styles.field}>
                <input type="email" name="email" id="email" placeholder="Email" />
                <label htmlFor="email">
                    <i className="fa-solid fa-envelope" /> Email
                </label>
            </div>

            <div className={styles.field}>
                <input type="password" name="password" id="password" placeholder="Password" />
                <label htmlFor="password">
                    <i className="fa-solid fa-key" /> Password
                </label>
            </div>

            <button className={styles.loginBtn} type='submit' href="/login">Login</button>

            <p>Don&apos;t have an account? <Link to="/register">Sign up here</Link></p>
        </form>
        </main>
        </>
        
    )
}