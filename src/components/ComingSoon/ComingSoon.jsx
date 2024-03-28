import { useEffect, useState } from "react";
import NewBook from "../NewBook/NewBook";

const ComingSoon = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("newbook.json")
          .then((res) => res.json())
          .then((data) => setBooks(data));          
      }, []);   

    return (
        <div>
           <div className="w-full h-[100px] bg-[rgba(19,19,19,0.05)] rounded-xl flex justify-center items-center">
        <h1 className="text-3xl font-bold">Coming Soon Books</h1>
      </div>
             
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-7">
            {books.map((book, idx) => (
                <NewBook key={idx} book={book}></NewBook>
            ))}
            </div>
        </div>
    );
};

export default ComingSoon;