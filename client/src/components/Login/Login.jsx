import { Link, useNavigate } from 'react-router'
import { useForm } from "react-hook-form";
import { useLogin } from '../../api/authApi';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

import styles from './Login.module.css'

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

        navigate(-1);
        
        return values;
    }   
    return (
        <>
            <main className={styles.loginMain}>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                            value: 6,
                            message: "Password must me at least 6 characters!"
                        },
                        pattern: {
                            value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-={}[\]:;"'<>,.?/~`|\\])[A-Za-z0-9!@#$%^&*()_+\-={}[\]:;"'<>,.?/~`|\\]+$/,
                            message: "Password must contain letters, numbers and symbols."
                        }
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