import styles from './Shop.module.css';
import ProductItem from '../ProductItem/ProductItem';
import { useProducts, useSortedProducts } from '../../api/productApi';
import Spinner from '../Spinner/Spinner';
import { useParams } from 'react-router';

export default function Shop() {
    const { products, isPending } = useProducts();
    const { typeOfProducts = '' } = useParams();
    const { products: sortedProducts, pending } = useSortedProducts(typeOfProducts);


    return (
        <>
        <section className={styles.title}>
  <h1>Nutritional supplements</h1>
  <p>Free delivery on orders over 100 BGN with your favorite courier</p>
</section>

<main className={styles.shopMain}>
  <div className={styles.select}>
    <p>Showing all {products.length} products</p>
  </div>

  <section className={styles.allProducts}>
    {sortedProducts.length > 0 
      ? (
        pending 
          ? <Spinner />
          : (sortedProducts.map(product => (
            <ProductItem 
            key={product._id}
            _id={product._id}
            name={product.name}
            imageUrl={product.img}
            price={product.price}
            type={product.type} />
          )))
      )
      : (
        isPending 
          ? <Spinner />
          : (products.map(product => (
            <ProductItem 
            key={product._id}
            _id={product._id}
            name={product.name}
            imageUrl={product.img}
            price={product.price}
            type={product.type} />
          )))
        )}
    
    
  </section>

  {/* <section className={styles.description}>
  </section> */}
</main>

        </>
        
    )
}
