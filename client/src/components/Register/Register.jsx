import { Link, useNavigate } from 'react-router'
import styles from './Register.module.css'
import { useRegister } from '../../api/authApi';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

export default function Register (){
    const { register } = useRegister();
    const { userLoginHandler } = useContext(UserContext);
    const navigate = useNavigate();

    const {
      register: formRegister,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
      registerHandler(data);
    };

    const registerHandler = async (formData) => {
        const values = formData;
      
        const authData = await register(values.email, values.password, values.rePassword);

        userLoginHandler(authData);

        toast.success('Successfully registered!')

        navigate('/');

        return values;
    }

    return (
       <main className={styles.registerMain}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Register</h2>

        <div className={styles.field}>
          <input
            {...formRegister("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
            placeholder="Email"
          />
          <label htmlFor="email">
            <i className="fa-solid fa-envelope" /> Email
          </label>
          {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        </div>

        <div className={styles.field}>
          <input
            type="password"
            {...formRegister("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-={}[\]:;"'<>,.?/~`|\\])[A-Za-z0-9!@#$%^&*()_+\-={}[\]:;"'<>,.?/~`|\\]+$/,
                message: "Password must contain letters, numbers and symbols."
              }
            })}
            placeholder="Password"
          />
          <label htmlFor="password">
            <i className="fa-solid fa-key" /> Password
          </label>
          {errors.password && <p className={styles.error}>{errors.password.message}</p>}
        </div>

        <div className={styles.field}>
          <input
            type="password"
            {...formRegister("rePassword", {
              required: "Please repeat the password",
              validate: (value) => value === watch("password") || "Passwords do not match",
            })}
            placeholder="Repeat Password"
          />
          <label htmlFor="rePassword">
            <i className="fa-solid fa-key" /> Repeat Password
          </label>
          {errors.rePassword && <p className={styles.error}>{errors.rePassword.message}</p>}
        </div>

        <input className={styles.registerBtn} type="submit" value="Register" />

        <p>
          Already have an account? <Link to="/login">Sign in here</Link>
        </p>
      </form>
    </main>
    )
}