import { useEffect, useState } from 'react';
import styles from './Edit.module.css'
import { useEditProduct, useProduct } from '../../api/productApi';
import { useNavigate, useParams } from 'react-router';

const sizeMap = {
  "protein": ["500g", "1kg", "2kg"],
  "pre-workout": ["30 servings", "60 servings"],
  "muscle-mass": ["1kg", "3kg", "5kg"],
  "weight-control": ["30 caps", "60 caps", "90 caps"],
};
export default function Edit() {
     const { productId } = useParams();
     const [selectedType, setSelectedType] = useState("");
     const [sizeOptions, setSizeOptions] = useState([]);
     const [selectedSize, setSelectedSize] = useState("");
     const { product } = useProduct(productId); 
     const { edit } = useEditProduct();
     const navigate = useNavigate();
    
        const handleTypeChange = (event) => {
          const type = event.target.value;
          setSelectedType(type);
          setSizeOptions(sizeMap[type] || []);
        };

        useEffect(() => {
          setSelectedType(product.type);
          setSizeOptions(sizeMap[product.type]);
          setSelectedSize(product.size);
        }, [product]);

        const editFormHandler = async (formData) => {
          const editData = Object.fromEntries(formData);

          await edit(productId, editData);

          navigate(`/details/${productId}`);
        }

    return (
        <main className={styles["edit-main"]}>
      <form action={editFormHandler}>
        <h2>Edit</h2>

      <div className={styles["option-menu"]}>
        <p>Type:</p>
        <select name="type" id="type" className={styles.select} value={selectedType} onChange={handleTypeChange}>
          <option value="">Select Type</option>
          <option value="protein">Protein</option>
          <option value="pre-workout">Pre Workout</option>
          <option value="muscle-mass">Muscle Mass</option>
          <option value="weight-control">Weight Control</option>
        </select>
      </div>

      <div className={styles["option-menu"]}>
        <p>Size:</p>
        <select
        name="size"
        id="size"
        className={styles.select}
        value={selectedSize}
        onChange={e => setSelectedSize(e.target.value)}
        >
          {
            sizeOptions?.map((size) => <option key={size} value={size}>{size}</option>)
          }
        </select>
      </div>

    <div className={styles.field}>
      <input type="text" name="name" id="name" placeholder="Name" defaultValue={product.name} />
      <label htmlFor="name">Product Name</label>
    </div>

    <div className={styles.field}>
      <input type="text" name="img" id="img" placeholder="Image URL" defaultValue={product.img} />
      <label htmlFor="img">Image URL</label>
    </div>

    {selectedType !== 'weight-control' ? <div className={styles.field}>
      <input type="text" name="flavour" id="flavour" placeholder="Flavour" defaultValue={product.flavour ? product.flavour : null} />
      <label htmlFor="flavour">Flavours</label>
    </div> : <div></div>}

    <div className={styles.field}>
      <input type="number" name="price" id="price" placeholder="Price" defaultValue={product.price} />
      <label htmlFor="price">Price</label>
    </div>


    <div className={styles.field}>
        <p className={styles['description-p']}>Description</p>
        <textarea name="description" id="description" defaultValue={product.description}></textarea>
    </div>

    <button className={styles.editBtn} type='submit'>Edit</button>
  </form>
</main>
    )
}