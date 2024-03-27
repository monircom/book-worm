import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-xl border-2">
        <figure className="px-10 py-10 rounded-xl bg-gray-300 m-5">
          <img src={book.image} alt="Shoes" className="w-[130px] rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          
        </div>
      </div>
    </div>
  );
};
Book.propTypes = {
  book: PropTypes.object,
};
export default Book;
