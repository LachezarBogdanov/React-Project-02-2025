import { Link } from 'react-router';
import styles from './FavouriteItem.module.css'

export default function FavouriteItem({
    product,
}) {

    return (
        <div className={styles['wishlist-item']}>
        <img src={product.img} alt={product.name} className={styles['game-cover']} />
        
        <div className={styles['game-info']}>
            <h3>{product.name}</h3>
            <p className={styles.reviews}>Type: <span className={styles.mixed}>{product.type}</span></p>
            {/* <p className={styles['release-date']}>Added on: <span>{product._createdOn}</span></p> */}
            
            <div className={styles.tags}>
                <span>{product.flavour}</span>
            </div>
        </div>

        <div className={styles['price-cart']}>
            <span className={styles.price}>{product.price}lv</span>
            <Link to={`/details/${product._id}`} className={styles['cart-btn']}>Details</Link>
        </div>
    </div>
    );
}
