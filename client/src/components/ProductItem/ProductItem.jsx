import { Link } from 'react-router';
import styles from './ProductItem.module.css'

export default function ProductItem({
    _id,
    imageUrl,
    name,
    type,
    price
}) {
    return (
        <Link to={`/details/${_id}`} className={styles.product}>
              <img
                src={imageUrl}
                alt={name}
              />
              <div className={styles.centerIcon}>+</div>
              <h2>{name}</h2>
              <p className={styles.type}>{type}</p>
              <p>{price}lv</p>
            </Link>
    );
}
