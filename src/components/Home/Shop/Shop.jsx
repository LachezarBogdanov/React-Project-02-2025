import styles from './Shop.module.css'

export default function Shop() {
    return (
        <>
        <section className={styles.title}>
        <h1>WheyPro - Nutritional supplements</h1>
        <p>Free delivery on orders over 100 BGN with your favorite courier</p>
        </section>
        <main>
        <div className={styles.select}>
        <p>Showing all N products</p>
        <select name="first-newest" id="first-newest">
        <option value="newest">Newest</option>
        <option value="newest">Cheapest</option>
        <option value="newest">Most expensive</option>
        </select>
        </div>
        <section className={styles.allProducts}>
        <a href="#" className={styles.product}>
        <img
        src="/FORCELAB_TESTOSTERONE_BOMB_540G_MANGO_WATERMELON_3D.jpg"
        alt="#"
        />
        <div className={styles.centerIcon}>+</div>
        <h2>Name</h2>
        <p className={styles.type}>30 sasheta</p>
        <p>42lv</p>
        </a>
        <a href="#" className={styles.product}>
        <img
        src="/FORCELAB_TESTOSTERONE_BOMB_540G_MANGO_WATERMELON_3D.jpg"
        alt="#"
        />
        <div className={styles.centerIcon}>+</div>
        <h2>Name</h2>
        <p className={styles.type}>30 sasheta</p>
        <p>42lv</p>
        </a>
        <a href="#" className={styles.product}>
        <img
        src="/FORCELAB_TESTOSTERONE_BOMB_540G_MANGO_WATERMELON_3D.jpg"
        alt="#"
        />
        <div className={styles.centerIcon}>+</div>
        <h2>Name</h2>
        <p className={styles.type}>30 sasheta</p>
        <p>42lv</p>
        </a>
        <a href="#" className={styles.product}>
        <img
        src="/FORCELAB_TESTOSTERONE_BOMB_540G_MANGO_WATERMELON_3D.jpg"
        alt="#"
        />
        <div className={styles.centerIcon}>+</div>
        <h2>Name</h2>
        <p className={styles.type}>30 sasheta</p>
        <p>42lv</p>
        </a>
        <a href="#" className={styles.product}>
        <img
        src="/FORCELAB_TESTOSTERONE_BOMB_540G_MANGO_WATERMELON_3D.jpg"
        alt="#"
        />
        <div className={styles.centerIcon}>+</div>
        <h2>Name</h2>
        <p className={styles.type}>30 sasheta</p>
        <p>42lv</p>
        </a>
        <a href="#" className={styles.product}>
        <img
        src="/FORCELAB_TESTOSTERONE_BOMB_540G_MANGO_WATERMELON_3D.jpg"
        alt="#"
        />
        <div className={styles.centerIcon}>+</div>
        <h2>Name</h2>
        <p className={styles.type}>30 sasheta</p>
        <p>42lv</p>
        </a>
        <a href="#" className={styles.product}>
        <img
        src="/FORCELAB_TESTOSTERONE_BOMB_540G_MANGO_WATERMELON_3D.jpg"
        alt="#"
        />
        <div className={styles.centerIcon}>+</div>
        <h2>Name</h2>
        <p className={styles.type}>30 sasheta</p>
        <p>42lv</p>
        </a>
        <a href="#" className={styles.product}>
        <img
        src="/FORCELAB_TESTOSTERONE_BOMB_540G_MANGO_WATERMELON_3D.jpg"
        alt="#"
        />
        <div className={styles.centerIcon}>+</div>
        <h2>Name</h2>
        <p className={styles.type}>30 sasheta</p>
        <p>42lv</p>
        </a>
        </section>
        <section className={styles.desrpition}>
        <h4>
        Nutritional supplements for every sports enthusiast
        </h4>
        <p>
        Welcome to our online supplement store where you will find a variety of
        products designed specifically to improve your health, fitness performance
        and overall well-being. Whether you are a beginner in training or an
        experienced athlete, here you will find everything you need to to achieve
        your goals. We offer women's nutritional supplements, men's nutritional
        supplements and fitness nutritional supplements to meet the needs of every
        athlete.
        </p>
        <h4>Our categories of nutritional supplements</h4>
        <p>
        In our store you will find a wide selection of supplements divided into
        several main categories:
        </p>
        <a href="#">Protein</a>
        <p>
        Protein is an essential component for building muscle mass and recovery
        after exercise. In this category you will find different flavors of
        proteins. Our proteins are ideal both for those looking to increase muscle
        mass and for those who want to recover faster and more efficiently after
        heavy training.
        </p>
        <a href="#">Before workout</a>
        <p>
        The Pre-Workout category includes products that help you increase energy,
        stamina and focus during exercise. Here you will find pre-workout formulas
        with caffeine, beta-alanine, arginine and other active ingredients that
        provide the necessary stimulus to achieve maximum results in the gym.
        </p>
        <a href="#">Weight control</a>
        <p>
        If your goal is to lose extra pounds and improve your physique, our Weight
        Management category is made just for you.
        </p>
        <a href="#">Muscle mass</a>
        <p>
        In the "Muscle mass" category, we offer various supplements that help
        increase muscle mass and strength. Here you will find testosterone
        products, proteins, amino acids and other products that contribute to the
        rapid accumulation of muscle mass and the improvement of sports results.
        </p>
        </section>
        </main>
        </>
        
    )
}