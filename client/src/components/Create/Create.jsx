import { useEffect, useMemo, useState } from 'react';
import styles from './Create.module.css'
import { useCreateProduct } from '../../api/productApi';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';

export default function Create() {
    const [selectedType, setSelectedType] = useState("");
    const [sizeOptions, setSizeOptions] = useState([]);
    const { create } = useCreateProduct();
    const navigate = useNavigate();

    const {
      register,
      handleSubmit,
      setValue,
      watch,
      formState: { errors },
    } = useForm();
    
    const sizeMap = useMemo(
      () => ({
        protein: ["500g", "1kg", "2kg"],
        "pre-workout": ["30 servings", "60 servings"],
        "muscle-mass": ["1kg", "3kg", "5kg"],
        "weight-control": ["30 caps", "60 caps", "90 caps"],
      }),
      []
    );

    const selectedTypes = watch('type');

    useEffect(() => {

          if (selectedTypes) {
            setSizeOptions(sizeMap[selectedTypes] || []);
          } else {
            setSizeOptions([]);
          }
      
          setValue("size", "");
        }, [selectedTypes, setValue, sizeMap]);
    
  
    const handleTypeChange = (event) => {
      const type = event.target.value;
      setSelectedType(type);
      
      setSizeOptions(sizeMap[type] || []);
    };

    const onSubmit = (data) => {
      createHandler(data);
    }

    const createHandler = async (data) => {

      const productData = data;

      await create(productData);

      toast.success('Successfully added product!');

      navigate('/shop');
    }
  
    return (
      <main className={styles["main-create"]}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.createForm}>
          <h2>Add Product</h2>
  
        <div className={styles["option-menu"]}>
          <p>Type:</p>
          <select
            id="type"
            className={styles.select}
            {...register('type', {
              required: 'Type is required!',
              onChange: handleTypeChange
            })}
          >
            
            <option value="">Select Type</option>
            <option value="protein">Protein</option>
            <option value="pre-workout">Pre Workout</option>
            <option value="muscle-mass">Muscle Mass</option>
            <option value="weight-control">Weight Control</option>
          </select>
          {errors.type && <p className={styles.errorSelect}>{errors.type.message}</p>}
        </div>
    
        {<div className={styles["option-menu"]}>
            <p>Size:</p>
            <select
              id="size"
              name='size'
              className={styles.select}
              {...register('size', {
                required: 'Size is required!',
                watch: 'type',
              })}
              >
              {sizeOptions.length > 0 ? (
                sizeOptions.map((size) => <option key={size} value={size}>{size}</option>)
              ) : (
                <option value="">Select a type first</option>
              )}
            </select>
            {errors.size && <p className={styles.errorSelect}>{errors.size.message}</p>}
          </div>}
          
          <div className={styles.field}>
            <input
              type="text"
              id="name"
              placeholder="Name" 
              {...register('name', {
                required: 'Name is required!',
                minLength: {
                  value: 5,
                  message: 'Name must be at least 5 characters!'
                }
              })}
            />

            <label htmlFor="name">Product Name</label>
            {errors.name && <p className={styles.error}>{errors.name.message}</p>}
          </div>
  
          <div className={styles.field}>

            <input
              type="text"
              id="img"
              placeholder="Image" 
              {...register('img', {
                required: 'ImageUrl is required!',
                pattern: {
                  value: /^https?:\/\/.+/g,
                  message: 'Invalid image url'
                }
              })}
            />

            <label htmlFor="img">Image URL</label>
            {errors.img && <p className={styles.error}>{errors.img.message}</p>}
          </div>
  
  
          <div className={styles.field}>

            <input
              type="number"
              id="price"
              placeholder="Price" 
              {...register('price', {
                required: 'Price is required!',
                min: {
                  value: 1,
                  message: 'Price must me minimum 1'
                },
              })}
            />

            <label htmlFor="price">Price</label>
            {errors.price && <p className={styles.error}>{errors.price.message}</p>}
          </div>
  
          
          {selectedType !== 'weight-control' ? <div className={styles.field}>

            <input
              type="text"
              id="flavour"
              placeholder="Flavour" 
              {...register('flavour', {
                required: 'Flavour is required!',
                minLength: {
                  value: 3,
                  message: 'Flavour must be minimum 3 characters'
                }
              })}
            />

            <label htmlFor="flavour">Flavours (e.g., Chocolate, Vanilla)</label>
            {errors.flavour && <p className={styles.error}>{errors.flavour.message}</p>}
          </div> : <div></div>}
  
          <div className={styles.field}>
            <p className={styles['description-p']}>Description</p>
            <textarea
              id="description"
              {...register('description', {
                required: 'Description is required!',
                minLength: {
                  value: 10,
                  message: 'Description must be minimum 10 characters'
                }
              })}
            >
            </textarea>
            {errors.description && <p className={styles.error}>{errors.description.message}</p>}
          </div>
  
          <button className={styles.createBtn} type='submit'>Create</button>
        </form>
      </main>
    );
}