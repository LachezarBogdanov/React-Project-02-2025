import { useContext } from 'react';
import styles from './Favourite.module.css'
import FavouriteItem from './FavouriteItem/FavouriteItem';
import { FavouriteContext } from '../../contexts/FavouriteContext';

export default function Favourite() {
    const { favouriteItems } = useContext(FavouriteContext);

    return (
        <main className={styles.favouriteMain}>

    <div className={styles['wishlist-container']}>
    <div className={styles['wishlist-header']}>
        <h2>FAVOURITE PRODUCTS</h2>
    </div>
        
        {favouriteItems.length > 0 
            ? (favouriteItems.map((product, index) => (
                <FavouriteItem key={product._id} product={product} index={index} />
            )))
            : <h1>No favourite items</h1>}
    
    </div>
        </main>
    );
}
