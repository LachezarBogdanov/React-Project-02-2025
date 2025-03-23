import { useContext } from 'react';
import styles from './CartTableProduct.module.css'
import { CartContext } from '../../../contexts/CartContext';
import { useNavigate } from 'react-router';

export default function CartTableProduct({
    product,
    index,
}) {
    const { updateQuantity, removeProduct } = useContext(CartContext);
    const navigate = useNavigate();

    const handleQuantityChange = (e) => {
        const newQuantity = Number(e.target.value);

        updateQuantity(index, newQuantity);
    }

    const handleRemoveProduct = () => {
        removeProduct(index);
    }

    const backToDetails = () => {
        navigate(`/details/${product._id}`);
    }

    return (
        <tr>
                    <td onClick={backToDetails} className={styles.td}>
                        <img 
                        src={product.img} 
                        alt={product.name} 
                        className={styles.productImg} 
                        />
                        <span>{product.name}
                            {product.flavour ? ' - ' : ''}
                            {product.flavour || ''}
                        </span>
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
