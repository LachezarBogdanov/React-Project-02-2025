import { Link, useParams } from 'react-router'
import styles from './Details.module.css'
import { useEffect, useState } from 'react';

export default function Details() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [flavours, setFlavours] = useState([]);
  
  
  useEffect(() => {
    fetch(`http://localhost:3030/jsonstore/supplements/${productId}`)
    .then(res => res.json())
    .then(result => {
      setFlavours(result.flavours.split(', '));
      setProduct(result);
    })
  }, [productId])
  
    return (
        <section className={styles.product}>
  <div className={styles.productImg}>
    <img src={product.image} alt={product.name} />
  </div>

  <div className={styles.productDetails}>
    <div className={styles.title}>
      <h1>{product.name}</h1>
      <div className={styles.editDelete}>
        <Link to="/edit" className={styles.edit}>Edit</Link>
        <a href="#" className={styles.delete}>Delete</a>
      </div>
    </div>

    <h2>{product.flavours}</h2>
    <p className={styles.price}>90lv</p>

    <article className={styles.flavour}>
      <p>Flavour</p>
      <select name="flavour" id="flavour">
        {flavours.map(flavour => (
          <option key={flavour} value={flavour}>{flavour}</option>
        ))}
      </select>
    </article>

    <article className={styles.size}>
      <p>Size</p>
      <p>{product.size}</p>
    </article>

    <article className={styles.quantity}>
      <p>Quantity</p>
      <input type="number" min={1} defaultValue={1} />
    </article>

    <a href="#" className={styles.addToCart}>Add to Cart</a>

    <div className={styles.accordion}>
      <input type="checkbox" id="item1" hidden />
      <label htmlFor="item1" className={styles.accordionHeader}>Описание</label>
      <div className={styles.accordionContent}>
        <p>
          {product.description}
        </p>
      </div>
    </div>
  </div>
</section>

    )
}