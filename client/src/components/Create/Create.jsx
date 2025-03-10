import { useState } from 'react';
import styles from './Create.module.css'

export default function Create() {
    const [selectedType, setSelectedType] = useState("");
    const [sizeOptions, setSizeOptions] = useState([]);

    // Define size options for each type
    const sizeMap = {
      protein: ["500g", "1kg", "2kg"],
      "pre-workout": ["30 servings", "60 servings"],
      "muscle-mass": ["1kg", "3kg", "5kg"],
      "weight-control": ["30 caps", "60 caps", "90 caps"],
    };
  
    const handleTypeChange = (event) => {
      const type = event.target.value;
      setSelectedType(type);
      console.log(type);
      
      setSizeOptions(sizeMap[type] || []);
    };
  
    return (
      <main className={styles["main-create"]}>
        <form action="#">
          <h2>Add Product</h2>
  
        <div className={styles["option-menu"]}>
          <p>Type:</p>
          <select name="type" id="type" className={styles.select} onChange={handleTypeChange}>
            <option value="">Select Type</option>
            <option value="protein">Protein</option>
            <option value="pre-workout">Pre Workout</option>
            <option value="muscle-mass">Muscle Mass</option>
            <option value="weight-control">Weight Control</option>
          </select>
        </div>
    
        {<div className={styles["option-menu"]}>
            <p>Size:</p>
            <select name="size" id="size" className={styles.select}>
              {sizeOptions.length > 0 ? (
                sizeOptions.map((size) => <option key={size} value={size}>{size}</option>)
              ) : (
                <option value="">Select a type first</option>
              )}
            </select>
          </div>}
          
          <div className={styles.field}>
            <input type="text" name="name" id="name" placeholder="Name" />
            <label htmlFor="name">Product Name</label>
          </div>
  
          <div className={styles.field}>
            <input type="text" name="img" id="img" placeholder="Image" />
            <label htmlFor="img">Image URL</label>
          </div>
  
  
          <div className={styles.field}>
            <input type="number" name="price" id="price" placeholder="Price" />
            <label htmlFor="price">Price</label>
          </div>
  
          
          {selectedType !== 'weight-control' ? <div className={styles.field}>
            <input type="text" name="flavour" id="flavour" placeholder="Flavour" />
            <label htmlFor="flavour">Flavours (e.g., Chocolate, Vanilla)</label>
          </div> : <div></div>}
  
          <div className={styles.field}>
            <p className={styles['description-p']}>Description</p>
            <textarea name="description" id="description"></textarea>
          </div>
  
          <a className={styles.createBtn} href="#">Create</a>
        </form>
      </main>
    );
}