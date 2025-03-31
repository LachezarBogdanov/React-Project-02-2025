import { useState } from 'react';
import styles from './Comment.module.css'
import DeleteModal from '../../DeleteModal/DeleteModal';

export default function Comment({
    userId,
    comment,
    deleteComment,
}) {
  const [showModal, setShowModal] = useState(false);
  const isOwner = userId === comment._ownerId;

  const handleDeleteComment = () => {
    deleteComment(comment._id);
    setShowModal(false);
  }

  const handleCancel = () => {
    setShowModal(false); 
  }

    return (
        <div className={styles.comment}>
          {isOwner ? 
            <button className={styles.xMark} onClick={() => setShowModal(true)}>X</button>
            : null}

            {showModal &&
              <DeleteModal onClose={handleCancel} onDelete={handleDeleteComment} message={'comment'} />}

              <div className={styles.photoEmail}>
                <img src="/card3.jpg" alt="#" />
                <p>{comment.email}</p>
              </div>
              <p>{comment.comment}</p>
            </div>
    );
}
