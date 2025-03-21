// import { Link } from 'react-router'
import { useLatestProducts } from '../../api/productApi'
import Spinner from '../Spinner/Spinner';
import styles from './Cart.module.css'
import CartProduct from './CartProduct/CartProduct';

export default function Cart() {
    
    const { latestProducts, pending } = useLatestProducts();
    
    return (
            <main  className={styles['cart-main']}>
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

    {/* <div className={styles['no-content']}>
            <h1>No products in the cart yet!</h1>
            <Link to="/shop" className={styles['btn-no-content']}>Go to shop</Link>
    </div> */}

    <section className={styles.details}>
        <h1>More for you:</h1>
        <article className={styles.products}>

            {pending 
                ? <Spinner />
                : (
                    latestProducts.length > 0 
                        ?   latestProducts.map(product => (
                            <CartProduct key={product._id} product={product} />
                        ))
                        : null
                )}
            
        </article>
    </section>
    </main>

        
    )
}