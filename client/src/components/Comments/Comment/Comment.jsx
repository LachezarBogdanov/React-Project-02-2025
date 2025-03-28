import styles from './Comment.module.css'

export default function Comment({
    comment,
}) {
    return (
        <div className={styles.comment}>
              <div className={styles.photoEmail}>
                <img src="/card3.jpg" alt="#" />
                <p>{comment.email}</p>
              </div>
              <p>{comment.comment}</p>
            </div>
    );
}
