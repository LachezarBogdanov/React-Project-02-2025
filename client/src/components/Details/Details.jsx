import { Link, useNavigate, useParams } from 'react-router'
import styles from './Details.module.css'
import { useEffect, useState } from 'react';
import { useDeleteProduct, useProduct } from '../../api/productApi';

export default function Details() {
  const { productId } = useParams();
  const [flavours, setFlavours] = useState([]);
  const { product } = useProduct(productId);
  const { deleteGame } = useDeleteProduct();
  const navigate = useNavigate();
  
  useEffect(() => {
    if(product?.flavour) {
      setFlavours(product.flavour.split(', '))
    }
  }, [product])
  
  const productDeleteHandler = async () => {
    const choice = confirm('Are you sure you want to delete this product?');

    if(!choice) {
      return;
    }

    await deleteGame(productId);

    navigate('/shop');
  }

    return (
        <section className={styles.product}>
  <div className={styles.productImg}>
    <img src={product.img} alt={product.name} />
  </div>

  <div className={styles.productDetails}>
    <div className={styles.title}>
      <h1>{product.name}</h1>
      <div className={styles.editDelete}>
        <Link to={`/edit/${productId}`} className={styles.edit}>Edit</Link>
        <button onClick={productDeleteHandler} className={styles.delete}>Delete</button>
      </div>
    </div>

    <h2>{product.flavour}</h2>
    <p className={styles.price}>{product.price}lv</p>

      {product.flavour && (
        <article className={styles.flavour}>
      <p>Flavour</p>
      <select name="flavour" id="flavour">
        {flavours.map(flavour => (
          <option key={flavour} value={flavour}>{flavour}</option>
        ))}
      </select>
    </article>
      )}

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
      <label htmlFor="item1" className={styles.accordionHeader}>Description</label>
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