import { useForm } from 'react-hook-form';
import Comment from './Comment/Comment';
import styles from './Comments.module.css'
import { useComments, useCreateComment } from '../../api/commentApi';
import toast from 'react-hot-toast';
import Spinner from '../Spinner/Spinner';
import { useEffect, useState } from 'react';

export default function Comments({
    productId,
    email,
}) {
    const { create } = useCreateComment();
    const { comments: dataComments, pending } = useComments(productId);
    const [comments, setComments] = useState(dataComments);

    useEffect(() => {
        setComments(dataComments);
    }, [dataComments]);
    
     const {
            register,
            handleSubmit,
            formState: { errors },
            reset,
          } = useForm();

    const onSubmit = (data) => {
        handleAddComment(data);
    }

    const handleAddComment = async (data) => {
        const comment = data.comment;

        const addStateComment = {
            email,
            comment: data.comment,
        }

        await create(productId, email, comment);
        
        setComments(comments => [...comments, addStateComment]);

        reset();

        toast.success('Successfully posted comment!');
    }
    
    return (
        <section className={styles.comments}>
  <div className={styles.heading}>
    <h1>Become part of us</h1>
    <p>Many satisfied customers</p>
  </div>

  <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
    <div className={styles.commentsForm}>
    <input 
      type="text" 
      {...register("comment", {
        required: 'Comment is required!'
      })} 
      placeholder="Comment" 
    />
      <button type='submit'>Comment</button>
    </div>
    {errors.comment && <p className={styles.error}>{errors.comment.message}</p>}
  </form>

  <article className={styles.allComments}>
    {pending 
        ? <Spinner />
        : (
            comments.length > 0 
                ? (
                    pending
                    ? <Spinner />
                : comments.map(comment => (
                    <Comment key={comment._id} comment={comment}/>
                )) 
            )
            :   <p className={styles.noComments}>No comments yet.</p>
        
    )}
    
  </article>
</section>
    );
}
