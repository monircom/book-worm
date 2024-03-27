import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const book = books.find((book) => book.bookId === idInt);
    const {tags} = book;
    const notify = () => toast("Wow so easy!");
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl ">
        <figure className="rounded-xl bg-[rgba(19,19,19,0.05)] p-16">             
          <img
            src={book.image}
            alt="Album"
            className="rounded-xl w-[425px]"
          />
        </figure>
        <div className="card-body w-1/2">
            <h1 className="font-playfair-display text-5xl mb-4">{book.bookName} </h1>            
            <h1 className="text-xl">By: {book.author} </h1>
            <hr className="border-t-2 border-solid"></hr>
            <h1>{book.category}</h1>
            <hr className="border-t-2 border-solid mb-6" ></hr>            
            <h1 className="mb-6"><span className="font-bold">Review :</span> {book.review}</h1>    
            <div className="flex gap-5">
            <h1 className="font-bold">Tag</h1>             
            {tags.map((tag, idx) => (            
            <button key={idx} className="bg-[rgba(35,190,10,0.05)] text-[#23BE0A] mr-4">#{tag}</button>           
            ))}           
             </div>  
             <hr className="border-t-2 border-solid my-6" ></hr> 
             <div className="">
  <table className="table">   
    <tbody>     
      <tr className="border-none ">        
        <td className="lg:w-[250px]">Number of Pages:</td>
        <td className="font-bold">{book.totalPages}</td>        
      </tr>     
      <tr className="border-none">        
        <td>Publisher:</td>
        <td className="font-bold">{book.publisher}</td>        
      </tr>
      
      <tr className="border-none">        
        <td>Year of Publishing:</td>
        <td className="font-bold">{book.yearOfPublishing}</td>        
      </tr>
      <tr className="border-none">        
        <td>Rating:</td>
        <td className="font-bold">{book.rating}</td>        
      </tr>
    </tbody>
  </table>
</div>

          <div className="card-actions">
            <button onClick={notify} className="btn btn-primary">Read</button>
            <button className="btn btn-primary">Wish</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
