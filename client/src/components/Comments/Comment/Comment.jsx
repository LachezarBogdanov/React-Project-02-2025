import styles from './Comment.module.css'

export default function Comment() {
    return (
        <div className={styles.comment}>
              <div className={styles.photoEmail}>
                <img src="/card3.jpg" alt="#" />
                <p>Lachezar Bogdanov</p>
              </div>
              <p>This is a good comment for this section</p>
              <div className={styles.buttons}>
                <button className={styles.commentBtn}>Delete</button>
              </div>
            </div>
    );
}
