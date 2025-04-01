import { Link, useNavigate, useParams } from 'react-router'
import styles from './Details.module.css'
import { useContext, useEffect, useState } from 'react';
import { useDeleteProduct, useProduct } from '../../api/productApi';
import { CartContext } from '../../contexts/CartContext';
import useAuth from '../../hooks/useAuth';
import { FavouriteContext } from '../../contexts/FavouriteContext';
import Comments from '../Comments/Comments';
import Spinner from '../Spinner/Spinner';
import DeleteModal from '../DeleteModal/DeleteModal';
import toast from 'react-hot-toast';

export default function Details() {
  const { productId } = useParams();
  const { deleteGame } = useDeleteProduct();
  const [flavours, setFlavours] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { product } = useProduct(productId);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { _id, isAuthenticated, email } = useAuth();
  const { addToFavourite } = useContext(FavouriteContext);
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    if(product?.flavour) {
      setFlavours(product.flavour.split(', '))
    }
  }, [product])

  const isOwner = product?._ownerId === _id;
  
  const handleCancel = () => {
    setShowModal(false); 
  }
  
  const productDeleteHandler = async () => {

    await deleteGame(productId);

    setShowModal(false);

    toast.success('Successfully deleted product!');

    navigate('/shop');
  }
  

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
};  

const handleAddToCart = () => {
  addToCart(product, quantity);

  navigate('/cart');
};

const handleFavourite = () => {
  addToFavourite(product);

  navigate('/favourites');
}


if(!product) {
  return <Spinner />;
}

    return (
      <>
        <section className={styles.product}>
          {showModal && 
            <DeleteModal
              onClose={handleCancel}
              onDelete={productDeleteHandler}
              message={'product'}
           />}
            
  <div className={styles.productImg}>
    <img src={product.img} alt={product.name} className={styles.detailsImg} />
  </div>

  <div className={styles.productDetails}>
    <div className={styles.title}>
      <h1>{product.name}</h1>

        {isAuthenticated 
          ? <button onClick={handleFavourite} className={styles.favourite}><i className='fa-solid fa-heart'/></button>
          : '' }

        {isOwner
          ? (
            <>
            <div className={styles.editDelete}>
              <Link to={`/edit/${productId}`} className={styles.edit}>Edit</Link>
              <button onClick={() => setShowModal(true)} className={styles.delete}>Delete</button>
            </div>
            </>
        ) : ''}
    </div>

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

      {isAuthenticated
        ? (
          <>
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
        </>
) : null}

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
    {isAuthenticated ? (
      <div className={styles.commentsSection}>
      <Comments productId={productId} email={email} />
      </div>
    )
    : null}
    </>
    )
}