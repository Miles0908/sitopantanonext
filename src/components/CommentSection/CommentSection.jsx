import { useEffect, useState } from "react";
import styles from "./CommentSection.module.scss";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [currentComment, setCurrentComment] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("https://api.npoint.io/a7cbfe9e31273daab739")
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setCurrentComment(data[0]);
      });
  }, []);

  const onHandleNext = () => {
    if (currentIndex < comments.length - 1) {
      setCurrentIndex(currentIndex + 1);

      setCurrentComment(comments[currentIndex + 1]);
    }
  };

  const onHandlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);

      setCurrentComment(comments[currentIndex - 1]);
    }
  };

  return (
    <div className={styles.CommentSection}>
      <h2>Commenti delle Persone</h2>
      {currentComment && (
        <div className={styles.Comments}>
          <p className={styles.Name}>
            <b>{currentComment.name}</b>
          </p>
          <p className={styles.Comment}>{currentComment.comments}</p>
          <p className={styles.like}>{currentComment.like}👍</p>

          <button onClick={onHandleNext}> Next</button>
          <button onClick={onHandlePrevious}> Prev</button>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
