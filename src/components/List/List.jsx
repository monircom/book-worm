import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BookCard from '../BookCard/BookCard';

const List = () => {

  const [readData, setReadData] = useState ([]);
  const [wishData, setWishData] = useState ([]);
  
  console.log(readData);
  console.log(wishData);
  useEffect(()=>{
    const getReadData = JSON.parse(localStorage.getItem("reads")) || [];
    setReadData(getReadData);
  },[]);

  useEffect(()=>{
    const getWishData = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishData(getWishData);
  },[])


  const handleBooksSorting = (sortingType) =>{

    if (sortingType === "rating") {

      const newReadData = [...readData];
      newReadData.sort((s1, s2) => {
        return s2.rating - s1.rating;
      });

      const newWishData = [...wishData];
      newWishData.sort((s1, s2) => {
        return s2.rating - s1.rating;
      });  

      setReadData(newReadData);
      setWishData(newWishData);
      

    } else if (sortingType === "page") {

      const newReadData = [...readData];
      newReadData.sort((s1, s2) => {
        return s2.totalPages - s1.totalPages;
      });

      const newWishData = [...wishData];
      newWishData.sort((s1, s2) => {
        return s2.totalPages - s1.totalPages;
      });  

      setReadData(newReadData);
      setWishData(newWishData);

            
    } else if (sortingType === "year") {
      const newReadData = [...readData];
      newReadData.sort((s1, s2) => {
        return s2.yearOfPublishing - s1.yearOfPublishing;
      });

      const newWishData = [...wishData];
      newWishData.sort((s1, s2) => {
        return s2.yearOfPublishing - s1.yearOfPublishing;
      });  

      setReadData(newReadData);
      setWishData(newWishData);

     
    }

  }

  return (
    <div>
      <div className="w-full h-[100px] bg-[rgba(19,19,19,0.05)] rounded-xl flex justify-center items-center">
        <h1 className="text-3xl font-bold">Books</h1>
      </div>

      <div className="flex justify-center mt-8 mb-14">
       
        <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn w-full m-1 bg-[#23BE0A] text-white text-xl font-semibold px-12">Sort By &nbsp; <img src="./images/down.png" alt="" /></div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li onClick={() => handleBooksSorting("rating")}><a>Rating</a></li>
                <li onClick={() => handleBooksSorting("page")}><a>Number of Pages</a></li>
                <li onClick={() => handleBooksSorting("year")}><a>Publisher Year</a></li>
               
            
            </ul>
            </div>
      </div>




      <div>
      <Tabs>
        <TabList>
        <Tab>Read Books</Tab>
        <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
        
        <div className="grid grid-cols-1 mt-7">
          {readData.map((book, idx) => (
            <BookCard key={idx} book={book}></BookCard>            
          ))}
        </div> 
        
        </TabPanel>
        <TabPanel>        
        <div className="grid grid-cols-1 mt-7">
          {wishData.map((book, idx) => (
            <BookCard key={idx} book={book}></BookCard>            
          ))}
        </div>
        </TabPanel>
    </Tabs>
      </div>
           
       
      
      <ToastContainer />
    </div>
  );
};

export default List;
