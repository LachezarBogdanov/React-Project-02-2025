import { Link, useNavigate } from 'react-router'
import { useForm } from "react-hook-form";
import { useLogin } from '../../api/authApi';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

import styles from './Login.module.css'
import toast from 'react-hot-toast';

export default function Login() {
    const { login } = useLogin();
    const { userLoginHandler } = useContext(UserContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const onSubmit = (data) => {
        loginHandler(data);
    }

    const loginHandler = async (data) => {
        const values = data;

            const authData = await login(values.email, values.password);
    
            userLoginHandler(authData);

            toast.success('Successfully logged in!')
    
            navigate(-1);
   
        
        return values;
    }   
    return (
        <>
            <main className={styles.loginMain}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
            <h2>Login</h2>

            <div className={styles.field}>
                <input
                    id="email"
                    placeholder="Email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email format",
                        },
                      })}
                 />
                <label htmlFor="email">
                    <i className="fa-solid fa-envelope" /> Email
                </label>
                {errors.email && <p className={styles.error}>{errors.email.message}</p>}
            </div>

            <div className={styles.field}>
                <input
                    type="password"
                    id="password"
                    placeholder="Password" 
                      {...register("password", {
                        required: "Password is required!",
                        minLength: {
                            value: 5,
                            message: "Password must me at least 5 characters!"
                        },
                      })}
                />
                <label htmlFor="password">
                    <i className="fa-solid fa-key" /> Password
                </label>
                {errors.password && <p className={styles.error}>{errors.password.message}</p>}
            </div>

            <button className={styles.loginBtn} type='submit' href="/login">Login</button>

            <p>Don&apos;t have an account? <Link to="/register">Sign up here</Link></p>
        </form>
        </main>
        </>
        
    )
}