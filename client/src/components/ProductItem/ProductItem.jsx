import { Link } from 'react-router';
import styles from './ProductItem.module.css'

export default function ProductItem({
    _id,
    image,
    name,
    type,
    price
}) {
    return (
        <Link to={`/details/${_id}`} className={styles.product}>
              <img
                src={image}
                alt="#"
              />
              <div className={styles.centerIcon}>+</div>
              <h2>{name}</h2>
              <p className={styles.type}>{type}</p>
              <p>{price}lv</p>
            </Link>
    );
}
