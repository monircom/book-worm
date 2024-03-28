import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const BookCard = ({book}) => {
  const {tags} = book;
  return (
    <div>
      <div className="bg-white shadow-lg rounded-xl border-2 mt-6">
        <div className="flex flex-col lg:flex-row">
          <div className="p-5 rounded-xl bg-[rgba(19,19,19,0.05)] m-6 flex justify-center">
          <img
            src={book.image}
            className="rounded-lg shadow-2xl w-[130px]"
          />
          </div>
          <div className="m-6">
            <h1 className="font-playfair-display text-2xl font-bold mb-4">{book.bookName}</h1>
            <h1 className="mb-4">By : {book.author}</h1>
          <div className="flex flex-col lg:flex-row gap-5 mb-4">
            <h1 className="font-bold">Tag</h1>                                   
            {tags.map((tag, idx) => (            
            <button key={idx} className="bg-[rgba(35,190,10,0.05)] text-[#23BE0A] mr-4">#{tag}</button>           
            ))}           
            <div className="flex  gap-2">
              <img src="./images/location.png" alt="" />
              <h1>Year of Publishing: {book.yearOfPublishing}</h1>
            </div>
             </div>
            <div className="flex flex-col lg:flex-row gap-2">
              <div className="flex gap-2">
              <img src="./images/person.png" alt="" />
              <h1>Publisher: {book.publisher}</h1>
              </div>
              <div className="flex gap-2">
              <img src="./images/page.png" alt="" />
              <h1>Page: {book.totalPages}</h1>
              </div>
            </div> 
            <hr className="border-t-2 border-solid my-6" ></hr>   
            <button className="bg-[rgba(50,142,255,0.15)] text-[#328EFF] mr-4 rounded-full px-5 py-3">Category: {book.category}</button>   
            <button className="bg-[rgba(255,172,51,0.15)] text-[#FFAC33] mr-4 rounded-full px-5 py-3">Rating: {book.rating}</button>
            <Link to={`/book/${book.bookId}`}>
            <button className="bg-[#23BE0A] text-white mr-4 rounded-full px-5 py-3 mt-6">View Details</button>    
            </Link>   
            
          </div>
        </div>
      </div>
    </div>
  );
};
BookCard.propTypes = {
  book: PropTypes.object,
};
export default BookCard;
