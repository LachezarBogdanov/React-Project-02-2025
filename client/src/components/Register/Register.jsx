import { Link, useNavigate } from 'react-router'
import styles from './Register.module.css'
import { useRegister } from '../../api/authApi';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

export default function Register (){
    const { register } = useRegister();
    const { userLoginHandler } = useContext(UserContext);
    const navigate = useNavigate();

    const registerHandler = async (formData) => {
        const values = Object.fromEntries(formData);

        const authData = await register(values.email, values.password, values.rePassword);

        userLoginHandler(authData);

        navigate('/');

        return values;
    }

    return (
        <main className={styles.registerMain}>
  <form action={registerHandler}>
    <h2>Register</h2>

    <div className={styles.field}>
      <input type="email" name="email" id="email" placeholder="Email" required />
      <label htmlFor="email">
        <i className="fa-solid fa-envelope" /> Email
      </label>
    </div>

    <div className={styles.field}>
      <input type="password" name="password" id="password" placeholder="Password" required />
      <label htmlFor="password">
        <i className="fa-solid fa-key" /> Password
      </label>
    </div>

    <div className={styles.field}>
      <input type="password" name="rePassword" id="rePassword" placeholder="Repeat Password" required />
      <label htmlFor="rePassword">
        <i className="fa-solid fa-key" /> Repeat Password
      </label>
    </div>

    <button className={styles.registerBtn} type='submit'>Register</button>

    <p>
      Already have an account? <Link to="/login">Sign in here</Link>
    </p>
  </form>
</main>
    )
}