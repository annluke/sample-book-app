import styles from './styles.module.css';

const BookTile = ({ title, author, image, genre }) => {
  return (
    <li className={styles.tile}>
      <div>
        <img src={image} alt={title} />
      </div>
      <div className={styles.tileContent}>
        <h3>{title}</h3>
        <div>
          <div>{author}</div>
          <div>{genre}</div>
        </div>
        <button className={styles.favButton}>Add to favorites</button>
      </div>
    </li>
  )
}

export default BookTile
