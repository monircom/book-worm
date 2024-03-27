import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("books.json")
          .then((res) => res.json())
          .then((data) => setBooks(data));          
      }, []);

      console.log(books);

    return (
        <div>        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-7">
          {books.map((book, idx) => (
            <Book key={idx} book={book}></Book>
          ))}
        </div>
        
      </div>
    );
};

export default Books;