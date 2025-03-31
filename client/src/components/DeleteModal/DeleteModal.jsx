import styles from './DeleteModal.module.css';

export default function DeleteModal({ 
    onClose,
    onDelete,
    message,
 }) {
    // onConfirm, message 

    return (
        <div className={styles["modal-overlay"]}>
      <div className={styles["modal-backdrop"]} onClick={onClose}></div>
      <div className={styles["modal-content"]}>
        <div className={styles["modal-header"]}>
          <h2>Are you sure you want to delete this {message}?</h2>
        </div>
        <div className={styles["modal-actions"]}>
          <button className={styles["delete-btn"]} onClick={onDelete}>Delete</button>
          <button className={styles["cancel-btn"]} onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
    );
}
