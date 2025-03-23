import { Link, useNavigate, useParams } from 'react-router'
import styles from './Details.module.css'
import { useContext, useEffect, useState } from 'react';
import { useDeleteProduct, useProduct } from '../../api/productApi';
import { CartContext } from '../../contexts/CartContext';

export default function Details() {
  const { productId } = useParams();
  const { deleteGame } = useDeleteProduct();
  const [flavours, setFlavours] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { product } = useProduct(productId);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  
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

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
};  

const handleAddToCart = () => {
  addToCart(product, quantity);

  navigate('/cart');
};

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
      <input
      type="number"
      min={1}
      defaultValue={1} 
      onChange={handleQuantityChange}
      />
    </article>

    <button onClick={handleAddToCart} className={styles.addToCart}>Add to Cart</button>

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