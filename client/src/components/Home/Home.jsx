import { Link } from 'react-router'
import styles from './Home.module.css'
import HomeProductItem from './HomeProductItem/HomeProductItem'
import { useLatestProducts } from '../../api/productApi'
import Spinner from '../Spinner/Spinner';

export default function Home () {
    const { latestProducts, pending } = useLatestProducts();

    return (
        <>
        <section className={styles.banner}>
        <img className={styles.bannerLogo} src="/images-removebg-preview.png" alt="logo" />
        <h1>
            WHEYPRO <br />
            ELITE
        </h1>
        <img className={styles.bannerImg} src="/gym.jpg" alt="banner" />
        </section>
        <section className={styles.welcome}>
        <div className={styles.wrapper}>
            <article className={styles.welcomeMsg}>
            <h1>Welcome to the world of WheyPro</h1>
            <p>
                WheyPro is the company that supports you in your pursuit of a healthy
                diet and an active lifestyle
            </p>
            <Link to="/shop" className={styles.allBtn}>ALL PRODUCTS</Link>
            </article>
            <article className={styles.photos}>
            <div className={styles.photo}>
                <img
                src="/FORCELAB_TRIBULUS_TERRESTRIS_60TABS_3D.jpg"
                alt="tribullus"
                />
            </div>
            <div className={styles.photo}>
                <img
                src="/FORCELAB_HYDRO_BURN_120CAPS_3D.png"
                alt="hydro-burn"
                />
            </div>
            </article>
        </div>
        <div className={styles.bigPhoto}>
            <img
            src="/FORCELAB_TESTOSTERONE_BOMB_540G_MANGO_WATERMELON_3D.jpg"
            alt="testoBomb"
            />
        </div>
        </section>
        <section className={styles.categories}>
        <h1>CATEGORIES</h1>
        <div className={styles.categoriesWrapper}>
            <Link to={'/shop/muscle-mass'} className={`${styles.cardMuscle} ${styles.card}`}>
            <span>Muscle mass</span>
            </Link>
            <Link to={'/shop/pre-workout'} className={`${styles.cardWorkout} ${styles.card}`}>
            <span>Before workout</span>
            </Link>
            <Link to={'/shop/weight-control'} className={`${styles.cardWeight} ${styles.card}`}>
            <span>Weight Control</span>
            </Link>
            <Link to={'/shop/protein'} className={`${styles.cardProtein} ${styles.card}`}>
            <span>Protein</span>
            </Link>
        </div>
        </section>
        <section className={styles.newProducts}>
        <h1>NEW PRODUCTS</h1>
        <div className={styles.newProductsWrapper}>
            
            {pending 
                ? <Spinner />
                : (
                    latestProducts.map(product => {
                        return <HomeProductItem key={product._id} product={product} />
                    })
                )}
            
        </div>
        </section>
       

        </>
        
    )
}