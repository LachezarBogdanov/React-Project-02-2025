import { Link } from 'react-router';
import styles from './FavouriteItem.module.css'
import { useContext } from 'react';
import { FavouriteContext } from '../../../contexts/FavouriteContext';

export default function FavouriteItem({
    product,
    index
}) {
    const { removeFavourite } = useContext(FavouriteContext);

    const handleRemoveItem = () => {
        removeFavourite(index);
    }

    return (
        <div className={styles['wishlist-item']}>
        <img src={product.img} alt={product.name} className={styles['favouriteCover']} />
        <div className={styles.xBtn} onClick={handleRemoveItem}>X</div>
        
        <div className={styles['favouriteInfo']}>
            <h3>{product.name}</h3>
            <p className={styles.flavour}>Type: <span className={styles.mixed}>{product.type}</span></p>
            
            <div className={styles.tags}>
                <span>{product.flavour ? `Flavour: ${product.flavour}` : ''}</span>
            </div>
        </div>

        <div className={styles['priceFavourite']}>
            <span className={styles.price}>{product.price}lv</span>
            <Link to={`/details/${product._id}`} className={styles['detailsBtn']}>Details</Link>
        </div>
    </div>
    );
}
