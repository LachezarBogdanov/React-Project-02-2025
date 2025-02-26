import styles from './Edit.module.css'

export default function Edit() {
    return (
        <main>
        <form action="#">
        <h2>Edit</h2>
        <div className={styles.field}>
        <input type="text" name="name" id="name" placeholder="Name" />
        <label htmlFor="name">Product name</label>
        </div>
        <div className={styles.field}>
        <input type="text" name="img" id="img" placeholder="Image" />
        <label htmlFor="img">Image URL</label>
        </div>
        <div className={styles.field}>
        <input type="text" name="flavour" id="flavour" placeholder="Flavour" />
        <label htmlFor="flavour">Flavours (chocolate, vanilla)</label>
        </div>
        <div className={styles.field}>
        <input type="text" name="size" id="size" placeholder="Size" />
        <label htmlFor="size">Size</label>
        </div>
        <div className={styles.field}>
        <input type="number" name="price" id="price" placeholder="Price" />
        <label htmlFor="price">Price</label>
        </div>
        <div className={styles.field}>
        <textarea
        name="desription"
        id="desription"
        defaultValue={""}
        />
        </div>
        <a className={styles.editBtn} href="#">
        Edit
        </a>
        </form>
        </main>
        
    )
}