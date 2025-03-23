import { useContext } from 'react';
import styles from './CartTableProduct.module.css'
import { CartContext } from '../../../contexts/CartContext';

export default function CartTableProduct({
    product,
    index,
}) {
    const { updateQuantity, removeProduct } = useContext(CartContext);

    const handleQuantityChange = (e) => {
        const newQuantity = Number(e.target.value);

        updateQuantity(index, newQuantity);
    }

    const handleRemoveProduct = () => {
        removeProduct(index);
    }

    return (
        <tr>
                    <td>
                        <img 
                        src={product.img} 
                        alt={product.name} 
                        className={styles.productImg} 
                        />
                        <span>{product.name} {product.flavour || ''}</span>
                    </td>
                    <td>{product.price}lv</td>
                    <td>
                        <input 
                        type="number" 
                        defaultValue={product.quantity}
                        min={1} 
                        className={styles.quantityInput} 
                        onChange={(handleQuantityChange)}
                        />
                    </td>
                    <td>
                        {product.quantity * product.price}lv
                        <button onClick={handleRemoveProduct} className={styles.removeBtn}>X</button>
                        </td>
                    </tr>
    );
}
