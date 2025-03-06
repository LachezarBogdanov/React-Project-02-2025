import styles from './Details.module.css'

export default function Details() {
    return (
        <section className={styles.product}>
        <div className={styles.productImg}>
        <img src="/FORCELAB_HYDRO_BURN_120CAPS_3D.png" alt="#" />
        </div>
        <div className={styles.productDetails}>
        <div className={styles.title}>
        <h1>Product name</h1>
        <div className={styles.editDelete}>
        <a href="#" className={styles.edit}>
        Edit
        </a>
        <a href="#" className={styles.delete}>
        Delete
        </a>
        </div>
        </div>
        <h2>Product flavour</h2>
        <p className={styles.price}>90lv</p>
        <article className={styles.flavour}>
        <p>Flavour</p>
        <select name="flavour" id="flavour">
        <option value="flavour">Flavour</option>
        <option value="flavour">Flavour</option>
        <option value="flavour">Flavour</option>
        </select>
        </article>
        <article className={styles.size}>
        <p>Size</p>
        <p>360g</p>
        </article>
        <article className={styles.quantity}>
        <p>Quantity</p>
        <input type="number" min={1} defaultValue={1} />
        </article>
        <a href="#" className={styles.addToCart}>
        Add to cart
        </a>
        <div className={styles.accordion}>
        <input type="checkbox" id="item1" hidden />
        <label htmlFor="item1" className={styles.accordionHeader}>
        Описание
        </label>
        <div className={styles.accordionContent}>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ea.
        </p>
        </div>
        </div>
        </div>
        </section>
        
    )
}