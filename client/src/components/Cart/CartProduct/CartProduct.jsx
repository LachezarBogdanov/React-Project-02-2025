import { Link } from 'react-router';
import styles from './CartProduct.module.css'

export default function CartProduct({
    product,
}) {
    return (
        <Link to={`/details/${product._id}`} className={styles.product}>
                    <img 
                    src={product.img} 
                    alt={product.name} 
                    />
                    <div className={styles.centerIcon}>+</div>
                    <p>{product.name}</p>
                    <p className={styles.type}>{product.type}</p>
                    <p>{product.price}lv</p>
                </Link>
    );
}
