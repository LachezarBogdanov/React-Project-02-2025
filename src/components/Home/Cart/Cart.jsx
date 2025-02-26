import styles from './Cart.module.css'

export default function Cart() {
    return (
        <main>
        <h1>Your Cart</h1>
        <div className={styles.cartContainer}>
        <table className={styles.cartTable}>
        <thead>
        <tr>
        <th>Продукт</th>
        <th>Цена</th>
        <th>Количество</th>
        <th>Общо</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>
        <img
        src="/FORCELAB_TESTOSTERONE_BOMB_540G_MANGO_WATERMELON_3D.jpg"
        alt="Product Image"
        className={styles.productImg}
        />
        <span>Testosterone bomb - Mango-Watermelon</span>
        </td>
        <td>70лв.</td>
        <td>
        <input
        type="number"
        defaultValue={1}
        min={1}
        className={styles.quantityInput}
        />
        </td>
        <td>70лв.</td>
        </tr>
        </tbody>
        </table>
        <div className={styles.promoSection}>
        <button className={styles.applyPromo}>Refresh cart</button>
        <button className={styles.updateCart}>Finish order</button>
        </div>
        </div>
        <section className={styles.details}>
        <h1>More for you:</h1>
        <article className={styles.products}>
        <a href="#" className={styles.product}>
        <img
        src="/FORCELAB_TRIBULUS_TERRESTRIS_60TABS_3D.jpg"
        alt="#"
        />
        <div className={styles.centerIcon}>+</div>
        <p>Tribulus terestris</p>
        <p className={styles.type}>30 sasheta</p>
        <p>50lv</p>
        </a>
        <a href="#" className={styles.product}>
        <img
        src="/FORCELAB_TRIBULUS_TERRESTRIS_60TABS_3D.jpg"
        alt="#"
        />
        <div className={styles.centerIcon}>+</div>
        <p>Tribulus terestris</p>
        <p className={styles.type}>30 sasheta</p>
        <p>50lv</p>
        </a>
        <a href="#" className={styles.product}>
        <img
        src="/FORCELAB_TRIBULUS_TERRESTRIS_60TABS_3D.jpg"
        alt="#"
        />
        <div className={styles.centerIcon}>+</div>
        <p>Tribulus terestris</p>
        <p className={styles.type}>30 sasheta</p>
        <p>50lv</p>
        </a>
        <a href="#" className={styles.product}>
        <img
        src="/FORCELAB_TRIBULUS_TERRESTRIS_60TABS_3D.jpg"
        alt="#"
        />
        <div className={styles.centerIcon}>+</div>
        <p>Tribulus terestris</p>
        <p className={styles.type}>30 sasheta</p>
        <p>50lv</p>
        </a>
        </article>
        </section>
        </main>
        
    )
}