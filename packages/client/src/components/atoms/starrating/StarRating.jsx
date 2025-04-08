import Rating from 'react-rating';
import styles from './StarRating.module.css'

const StarRating = ({ratings}) => {
  return (
    <Rating
      initialRating={Math.round(ratings * 2) / 2}
      readonly
      fractions={2}
      emptySymbol={<span className={`${styles.star} ${styles.empty}`}>☆</span>}
      fullSymbol={<span className={`${styles.star} ${styles.full}`}>★</span>}
    />
  );
};

export default StarRating;
