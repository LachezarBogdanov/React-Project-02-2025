import styles from './Comments.module.css'

export default function Comments() {
    return (
        <section className={styles.comments}>
        <div className={styles.heading}>
            <h1>Become part of us</h1>
            <p>Many satisfied customers</p>
        </div>
        <form action="#">
            <div className={styles.commentsForm}>
            <input type="text" placeholder="Comment" />
            <a href="#">Comment</a>
            </div>
        </form>
        <article className={styles.allComments}>
            <div className={styles.comment}>
            <div className={styles.photoEmail}>
                <img src="/card3.jpg" alt="#" />
                <p>Lachezar Bogdanov</p>
            </div>
            <p>This is good comment for this section</p>
            <div className={styles.buttons}>
                <button className={styles.commentBtn}>Delete</button>
            </div>
            </div>
            <div className={styles.comment}>
            <div className={styles.photoEmail}>
                <img src="/card3.jpg" alt="#" />
                <p>Lachezar Bogdanov</p>
            </div>
            <p>This is good comment for this section</p>
            <div className={styles.buttons}>
                <button className={styles.commentBtn}>Delete</button>
            </div>
            </div>
            <div className={styles.comment}>
            <div className={styles.photoEmail}>
                <img src="/card3.jpg" alt="#" />
                <p>Lachezar Bogdanov</p>
            </div>
            <p>This is good comment for this section</p>
            <div className={styles.buttons}>
                <button className={styles.commentBtn}>Delete</button>
            </div>
            </div>
            <div className={styles.comment}>
            <div className={styles.photoEmail}>
                <img src="/card3.jpg" alt="#" />
                <p>Lachezar Bogdanov</p>
            </div>
            <p>This is good comment for this section</p>
            <div className={styles.buttons}>
                <button className={styles.commentBtn}>Delete</button>
            </div>
            </div>
            <div className={styles.comment}>
            <div className={styles.photoEmail}>
                <img src="/card3.jpg" alt="#" />
                <p>Lachezar Bogdanov</p>
            </div>
            <p>This is good comment for this section</p>
            <div className={styles.buttons}>
                <button className={styles.commentBtn}>Delete</button>
            </div>
            </div>
            <div className={styles.comment}>
            <div className={styles.photoEmail}>
                <img src="/card3.jpg" alt="#" />
                <p>Lachezar Bogdanov</p>
            </div>
            <p>This is good comment for this section</p>
            <div className={styles.buttons}>
                <button className={styles.commentBtn}>Delete</button>
            </div>
            </div>
        </article>
        </section>
    );
}
