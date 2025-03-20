import { Link } from "react-router";
import styles from './HomeProductItem.module.css'

export default function HomeProductItem({
    product
}) {
    return (
        <Link to={`details/${product._id}`} className={styles.newProduct}>
            <img src={product.img} alt="pre" />
            <div className={styles.centerIcon}>+</div>
            <h3>{product.name}</h3>
            <p className={styles.type}>{product.type}</p>
            <p>{product.price}lv</p>
            </Link>
    );
}
