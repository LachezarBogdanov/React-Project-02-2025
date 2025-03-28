import Comment from './Comment/Comment';
import styles from './Comments.module.css'

export default function Comments() {
    return (
        <section className={styles.comments}>
  <div className={styles.heading}>
    <h1>Become part of us</h1>
    <p>Many satisfied customers</p>
  </div>

  <form className={styles.form}>
    <div className={styles.commentsForm}>
      <input type="text" placeholder="Comment" />
      <a href="#">Comment</a>
    </div>
  </form>

  <article className={styles.allComments}>
    <Comment />
  </article>
</section>
    );
}
