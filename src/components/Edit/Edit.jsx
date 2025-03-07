import { useState } from 'react';
import styles from './Edit.module.css'

const sizeMap = {
  protein: ["500g", "1kg", "2kg"],
  "pre-workout": ["30 servings", "60 servings"],
  "muscle-mass": ["1kg", "3kg", "5kg"],
  "weight-control": ["30 caps", "60 caps", "90 caps"],
};
export default function Edit() {
     const [selectedType, setSelectedType] = useState("protein");
        const [sizeOptions, setSizeOptions] = useState(sizeMap.protein);
    
      
        const handleTypeChange = (event) => {
          const type = event.target.value;
          setSelectedType(type);
          setSizeOptions(sizeMap[type] || []);
        };

    return (
        <main className={styles["edit-main"]}>
  <form action="#">
    <h2>Edit</h2>

    <div className={styles.field}>
      <input type="text" name="name" id="name" placeholder="Name" />
      <label htmlFor="name">Product Name</label>
    </div>

    <div className={styles.field}>
      <input type="text" name="img" id="img" placeholder="Image URL" />
      <label htmlFor="img">Image URL</label>
    </div>

    <div className={styles.field}>
      <input type="text" name="flavour" id="flavour" placeholder="Flavour" />
      <label htmlFor="flavour">Flavours (Chocolate, Vanilla)</label>
    </div>

    <div className={styles.field}>
      <input type="number" name="price" id="price" placeholder="Price" />
      <label htmlFor="price">Price</label>
    </div>

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
      <select name="size" id="size" className={styles.select}>
        {
          sizeOptions.map((size) => <option key={size} value={size}>{size}</option>)
        }
      </select>
    </div>

    <div className={styles.field}>
        <p className={styles['description-p']}>Description</p>
        <textarea name="description" id="description"></textarea>
    </div>

    <a className={styles.editBtn} href="#">Edit</a>
  </form>
</main>
    )
}