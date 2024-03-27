const BookCard = () => {
  return (
    <div>
      <div className="bg-white shadow-lg rounded-xl border-2">
        <div className="flex flex-col lg:flex-row">
          <div className="p-5 rounded-xl bg-[rgba(19,19,19,0.05)] m-6">
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="rounded-lg shadow-2xl"
          />
          </div>
          <div className="m-6">
            <h1 className="font-playfair-display text-2xl font-bold mb-4">The Catcher in the Rye</h1>
            <h1 className="mb-4">By : Awlad Hossain</h1>
            <div className="flex gap-5 mb-4">
            <h1 className="font-bold">Tag</h1>  
            <button className="bg-[rgba(35,190,10,0.05)] text-[#23BE0A] mr-4">#hhhh</button>           
            {/* {tags.map((tag, idx) => (            
            <button key={idx} className="bg-[rgba(35,190,10,0.05)] text-[#23BE0A] mr-4">#{tag}</button>           
            ))}            */}
            <div className="flex gap-2">
              <img src="./images/location.png" alt="" />
              <h1>Year of Publishing: 1924</h1>
            </div>
             </div>
            <div className="flex gap-2">
              <img src="./images/location.png" alt="" />
              <h1>Year of Publishing: 1924</h1>
              <img src="./images/location.png" alt="" />
              <h1>Year of Publishing: 1924</h1>
            </div> 
            <hr className="border-t-2 border-solid my-6" ></hr>   
            <button className="bg-[rgba(50,142,255,0.15)] text-[#328EFF] mr-4 rounded-full px-5 py-3">Category: Classic</button>   
            <button className="bg-[rgba(255,172,51,0.15)] text-[#FFAC33] mr-4 rounded-full px-5 py-3">Rating: 4.5</button>
            <button className="bg-[#23BE0A] text-white mr-4 rounded-full px-5 py-3">View Details</button>       
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
