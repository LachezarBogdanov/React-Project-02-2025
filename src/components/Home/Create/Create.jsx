import styles from './Create.module.css'

export default function Create() {
    return (
        <main>
        <form action="#">
        <h2>Create product</h2>
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
        <label htmlFor="size">Size (30 doses)</label>
        </div>
        <div className={styles.field}>
        <input type="number" name="price" id="price" placeholder="Price" />
        <label htmlFor="price">Price</label>
        </div>
        <div className={styles.field}>
        <label htmlFor="desription">Description</label>
        <textarea
        name="desription"
        id="desription"
        defaultValue={"                "}
        />
        </div>
        <a className={styles.createBtn} href="#">
        Create
        </a>
        </form>
        </main>
        
    )
}