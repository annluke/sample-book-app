import { booklist } from  './data';
import BookList from '../../components/BookList';
import styles from './styles.module.css';

const AllBooks = () => {
  return (
    <div>
      <h2 className={styles.heading}>All Books</h2>
      <BookList bookList={booklist} />
    </div>
  )
}

export default AllBooks
