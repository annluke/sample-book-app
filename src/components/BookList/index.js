import BookTile from '../BookTile';
import styles from './styles.module.css';

const BookList = ({ bookList }) => {
  return (
    <ul className={styles.tileWrapper}>
      {bookList.map(book => <BookTile key={book.id} {...book} />)}
    </ul>
  )
}

export default BookList
