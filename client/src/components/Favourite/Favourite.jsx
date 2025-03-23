import { useLiked } from '../../api/likedApi';
import styles from './Favourite.module.css'
import FavouriteItem from './FavouriteItem/FavouriteItem';

export default function Favourite() {
    const { favourites } = useLiked();

    return (
        <main className={styles.favouriteMain}>

    <div className={styles['wishlist-container']}>
    <div className={styles['wishlist-header']}>
        <h2>USER&apos;S FAVOURITES</h2>
    </div>
    
    {/* <div className={styles['search-sort']}>
        <input type="text" placeholder="Search by name or tag" />
        <div className={styles.buttons}>
            <button>Search</button>
        </div>
    </div> */}
        
        {favourites.length > 0 
            ? (favourites.map(product => (
                <FavouriteItem key={product._id} product={product} />
            )))
            : <h1>No favourite items</h1>}
    
    </div>
        </main>
    );
}
