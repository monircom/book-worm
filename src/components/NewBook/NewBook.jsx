import PropTypes from "prop-types";

const NewBook = ({ book }) => {  
    const {tags} = book;
  return (
    <div>        
      <div className="card w-full  h-full bg-base-100 shadow-xl border-2">
        <figure className="px-10 py-10 rounded-xl bg-gray-300 m-5">
          <img src={book.image} alt="Shoes" className="w-[130px] rounded-xl" />
        </figure>
        <div className="ml-6"> 
            
            {tags.map((tag, idx) => (            
            <button key={idx} className="bg-[rgba(35,190,10,0.05)] text-[#23BE0A] mr-4">{tag}</button>           
            ))}
           
        </div>
        <div className="card-body text-left">
          <h2 className="card-title font-playfair-display text-2xl">{book.bookName}</h2>
          <p className="">By: {book.author}</p>  
          <hr className="my-6 border-t-2 border-dashed"></hr>     
          <div className="flex justify-between">
            <div>
                <p>{book.category}</p>
            </div>
            <div className="flex gap-1">
                <p>{book.rating}</p>
                <img  src="./images/star.png" alt="" className="hover:cursor-pointer" />
            </div>
        </div>
        </div>        
      </div>      
    </div>
  );
};
NewBook.propTypes = {
  book: PropTypes.object,
};
export default NewBook;
