import { booklist } from  './data';
import BookList from '../../components/BookList';

const AllBooks = () => {
  return (
    <div>
      <h2>All Books</h2>
      <BookList bookList={booklist} />
    </div>
  )
}

export default AllBooks
