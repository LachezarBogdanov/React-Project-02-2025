import { useContext } from 'react';
import { useLatestProducts } from '../../api/productApi'
import Spinner from '../Spinner/Spinner';
import styles from './Cart.module.css'
import CartProduct from './CartProduct/CartProduct';
import CartTableProduct from './CartTableProduct/CartTableProduct';
import { Link } from 'react-router';
import { CartContext } from '../../contexts/CartContext';

export default function Cart() {
    const { latestProducts, pending } = useLatestProducts();
    const { cartItems, calculateTotal } = useContext(CartContext);

    const totalPrice = calculateTotal();
    
    return (
            <main  className={styles['cart-main']}>
    <h1>Your Cart</h1>
        {cartItems.length > 0 
            ? (
                
                <div className={styles.cartContainer}>
                <table className={styles.cartTable}>
        <thead>
            <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>All</th>
            </tr>
        </thead>
        <tbody>
            
            {cartItems.length > 0 
                ? (cartItems.map((product, index) => (
                    <CartTableProduct key={product._id} product={product} index={index} />
                )))
                : ''
                }
            

        </tbody>
        <tfoot>
            <tr>
                <td colSpan="4" className={styles.totalRow}>
                    <span className={styles.totalAmount}>Total: {totalPrice}lv.</span>
                </td>
            </tr>
        </tfoot>
        </table>
        <div className={styles.promoSection}>
            {/* <button className={styles.applyPromo}>Refresh cart</button> */}
            <button className={styles.updateCart}>Finish order</button>
            </div>
        </div>
    )
    : (
        <div className={styles['no-content']}>
        <h1>No products in the cart yet!</h1>
        <Link to="/shop" className={styles['btn-no-content']}>Go to shop</Link>
        </div>
    )}

    
   
        
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