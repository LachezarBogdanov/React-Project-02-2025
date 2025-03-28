import { useEffect, useState } from 'react';
import styles from './Edit.module.css'
import { useEditProduct, useProduct } from '../../api/productApi';
import { useNavigate, useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const sizeMap = {
  "protein": ["500g", "1kg", "2kg"],
  "pre-workout": ["30 servings", "60 servings"],
  "muscle-mass": ["1kg", "3kg", "5kg"],
  "weight-control": ["30 caps", "60 caps", "90 caps"],
};
export default function Edit() {
     const { productId } = useParams();
     const [sizeOptions, setSizeOptions] = useState([]);
     const { product } = useProduct(productId); 
     const { edit } = useEditProduct();
     const navigate = useNavigate();
     
     const {
           register,
           handleSubmit,
           setValue,
           watch,
           formState: { errors },
         } = useForm({
          defaultValues: {
            type: '',
            size: '',
            name: '',
            img: '',
            price: '',
            flavour: '',
            description: '',
          }
         });

      const selectedType = watch('type');
      const selectedSize = watch('size');

     useEffect(() => {
      if(product) {
          setSizeOptions(sizeMap[product.type]);
        setValue("name", product.name);
      setValue("img", product.img);
      setValue("price", product.price);
      setValue("flavour", product.flavour || '');
      setValue("description", product.description);
      setValue('type', product.type);
      setValue('size', product.size);
      }
     }, [product, setValue]);

     useEffect(() => {
        if(selectedType) {
            setSizeOptions(sizeMap[selectedType] || []);
        }
     }, [setSizeOptions, setValue, selectedType]);

     const onSubmit = (data) => {
      editFormHandler(data);
     }

    
        const handleTypeChange = (event) => {
          const type = event.target.value;
          setValue('type', type);
          setSizeOptions(sizeMap[type] || []);
          setValue('size', '');
        };


        const editFormHandler = async (data) => {
          const editData = data;

          await edit(productId, editData);

          toast.success('Successfully updated product!')

          navigate(`/details/${productId}`);
        }

    return (
        <main className={styles["edit-main"]}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.editForm}>
        <h2>Edit</h2>

      <div className={styles["option-menu"]}>
        <p>Type:</p>
        <select
          id="type"
          className={styles.select}
          value={selectedType}
          onChange={handleTypeChange}
          {...register('type', {
            required: 'Type is required!',
          })}
          >
          <option value="">Select Type</option>
          <option value="protein">Protein</option>
          <option value="pre-workout">Pre Workout</option>
          <option value="muscle-mass">Muscle Mass</option>
          <option value="weight-control">Weight Control</option>
        </select>
      </div>
        {errors.type && <p className={styles.errorSelect}>{errors.type.message}</p>}

      <div className={styles["option-menu"]}>
        <p>Size:</p>
        <select
        id="size"
        className={styles.select}
        value={selectedSize}
        {...register('size', {
          required: 'Size is required',
        })}
        >
          {
            sizeOptions?.map((size) => <option key={size} value={size}>{size}</option>)
          }
        </select>
      </div>
        {errors.size && <p className={styles.errorSelect}>{errors.size.message}</p>}

    <div className={styles.field}>
      <input
        type="text"
        id="name"
        placeholder="Name"
        {...register('name', {
          required: 'Name is required!',
          minLength: {
            value: 5,
            message: 'Name must be at least 5 characters',
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
        placeholder="Image URL"
        {...register('img', {
          required: 'Image url is required!',
          pattern: {
            value: /^https?:\/\/.+/g,
            message: 'Invalid image url!'
          }
        })}
      />

      <label htmlFor="img">Image URL</label>
      {errors.img && <p className={styles.error}>{errors.img.message}</p>}
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
            message: 'Flavour must minimum 3 characters!'
          }
        })}
      />
      <label htmlFor="flavour">Flavours</label>
      {errors.flavour && <p className={styles.error}>{errors.flavour.message}</p>}
    </div> : <div></div>}

    <div className={styles.field}>
      <input
        type="number"
        id="price"
        placeholder="Price"
        {...register('price', {
          required: 'Price is required!',
          min: {
            value: 1,
            message: 'Price must me minimum 1',
          }
        })}
      />
      <label htmlFor="price">Price</label>
      {errors.price && <p className={styles.price}>{errors.price.message}</p>}
    </div>


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
        ></textarea>
    </div>

    <button className={styles.editBtn} type='submit'>Edit</button>
  </form>
</main>
    )
}