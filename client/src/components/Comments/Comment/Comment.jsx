import styles from './Comment.module.css'

export default function Comment({
    userId,
    comment,
    deleteComment,
}) {
  console.log('--------------------');
  
  console.log(comment._ownerId);
  console.log(userId);
  console.log(comment._id);
  
  const isOwner = userId === comment._ownerId;
  
    return (
        <div className={styles.comment}>
          {isOwner ? 
            <button className={styles.xMark} onClick={() => deleteComment(comment._id)}>X</button>
            : null}
              <div className={styles.photoEmail}>
                <img src="/card3.jpg" alt="#" />
                <p>{comment.email}</p>
              </div>
              <p>{comment.comment}</p>
            </div>
    );
}
