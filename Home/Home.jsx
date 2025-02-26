import styles from './Home.module.css'

export default function Home () {
    return (
        <>
        <header>
        <nav>
        <a className={styles.logo} href="#">
        WHEYPRO
        </a>
        <ul>
        <li>
        <a href="#">HOME</a>
        </li>
        <li>
        <a href="#">SHOP</a>
        </li>
        <li>
        <a href="#">ABOUT US</a>
        </li>
        <li>
        <a href="#">LOGIN</a>
        </li>
        <li>
        <a href="#">REGISTER</a>
        </li>
        <li>
        <a href="#">
        <i className="fa-solid fa-cart-shopping" />
        </a>
        </li>
        </ul>
        </nav>
        </header>
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
        ForceLab is the company that supports you in your pursuit of a healthy
        diet and an active lifestyle
        </p>
        <a href="#">ALL PRODUCTS</a>
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
        <a href="#" className={`${styles.cardMuscle} ${styles.card}`}>
        <span>Muscle mass</span>
        </a>
        <a href="#" className={`${styles.cardWorkout} ${styles.card}`}>
        <span>Before workout</span>
        </a>
        <a href="#" className={`${styles.cardWeight} ${styles.card}`}>
        <span>Weight Control</span>
        </a>
        <a href="#" className={`${styles.cardProtein} ${styles.card}`}>
        <span>Protein</span>
        </a>
        </div>
        </section>
        <section className={styles.newProducts}>
        <h1>NEW PRODUCTS</h1>
        <div className={styles.newProductsWrapper}>
        <a href="#" className={styles.newProduct}>
        <img src="/pre-workout.jpg" alt="pre" />
        <div className={styles.centerIcon}>+</div>
        <p>Name of the product</p>
        <p className={styles.type}>30 sasheta</p>
        <p>50lv</p>
        </a>
        <a href="#" className={styles.newProduct}>
        <img src="/pre-workout.jpg" alt="pre" />
        <div className={styles.centerIcon}>+</div>
        <p>Name of the product</p>
        <p className={styles.type}>30 sasheta</p>
        <p>50lv</p>
        </a>
        <a href="#" className={styles.newProduct}>
        <img src="/pre-workout.jpg" alt="pre" />
        <div className={styles.centerIcon}>+</div>
        <p>Name of the product</p>
        <p className={styles.type}>30 sasheta</p>
        <p>50lv</p>
        </a>
        <a href="#" className={styles.newProduct}>
        <img src="/pre-workout.jpg" alt="pre" />
        <div className={styles.centerIcon}>+</div>
        <p>Name of the product</p>
        <p className={styles.type}>30 sasheta</p>
        <p>50lv</p>
        </a>
        </div>
        </section>
        <section className={styles.comments}>
        <div className={styles.heading}>
        <h1>Become part of us</h1>
        <p>Many satisfied customers</p>
        </div>
        <form action="#">
        <div className={styles.commentsForm}>
        <input type="text" placeholder="Comment" />
        <a href="#">Comment</a>
        </div>
        </form>
        <article className={styles.allComments}>
        <div className={styles.comment}>
        <div className={styles.photoEmail}>
        <img src="/card3.jpg" alt="#" />
        <p>Lachezar Bogdanov</p>
        </div>
        <p>This is good comment for this section</p>
        <div className={styles.buttons}>
        <button className={styles.commentBtn}>Delete</button>
        </div>
        </div>
        <div className={styles.comment}>
        <div className={styles.photoEmail}>
        <img src="/card3.jpg" alt="#" />
        <p>Lachezar Bogdanov</p>
        </div>
        <p>This is good comment for this section</p>
        <div className={styles.buttons}>
        <button className={styles.commentBtn}>Delete</button>
        </div>
        </div>
        <div className={styles.comment}>
        <div className={styles.photoEmail}>
        <img src="/card3.jpg" alt="#" />
        <p>Lachezar Bogdanov</p>
        </div>
        <p>This is good comment for this section</p>
        <div className={styles.buttons}>
        <button className={styles.commentBtn}>Delete</button>
        </div>
        </div>
        <div className={styles.comment}>
        <div className={styles.photoEmail}>
        <img src="/card3.jpg" alt="#" />
        <p>Lachezar Bogdanov</p>
        </div>
        <p>This is good comment for this section</p>
        <div className={styles.buttons}>
        <button className={styles.commentBtn}>Delete</button>
        </div>
        </div>
        <div className={styles.comment}>
        <div className={styles.photoEmail}>
        <img src="/card3.jpg" alt="#" />
        <p>Lachezar Bogdanov</p>
        </div>
        <p>This is good comment for this section</p>
        <div className={styles.buttons}>
        <button className={styles.commentBtn}>Delete</button>
        </div>
        </div>
        <div className={styles.comment}>
        <div className={styles.photoEmail}>
        <img src="/card3.jpg" alt="#" />
        <p>Lachezar Bogdanov</p>
        </div>
        <p>This is good comment for this section</p>
        <div className={styles.buttons}>
        <button className={styles.commentBtn}>Delete</button>
        </div>
        </div>
        </article>
        </section>
        <footer>
        <h1>WHEYPRO</h1>
        <div className={styles.footerWrapper}>
        <section className={styles.address}>
        <h2>
        <i className="fa-solid fa-location-dot" />
        Address
        </h2>
        <p>Sofia, bul.Tsarigradsko 160</p>
        </section>
        <section className={styles.mobile}>
        <h2>
        <i className="fa-solid fa-phone" />
        Phone-number
        </h2>
        <p>0888888888</p>
        </section>
        <section className={styles.email}>
        <h2>
        <i className="fa-solid fa-envelope" />
        E-mail
        </h2>
        <p>wheypro-support@gmail.com</p>
        </section>
        </div>
        <div className={styles.icons}>
        <div className={styles.iconsWrapper}>
        <a href="#">
        <i className="fa-brands fa-facebook" />
        </a>
        <a href="#">
        <i className="fa-brands fa-instagram" />
        </a>
        <a href="#">
        <i className="fa-brands fa-twitter" />
        </a>
        </div>
        <p>© All rights reserved 23.02.2025</p>
        </div>
        </footer>
        </>
        
    )
}