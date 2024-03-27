import { Link } from 'react-router-dom';
import banner from '/images/banner.png'

const Banner = () => {
  return (
    <div>
      <div>
        <div className="bg-[rgba(19,19,19,0.05)] rounded-[32px] lg:min-h-[550px]">
          <div className='flex justify-evenly items-center'>
          <div className="flex flex-col justify-center items-center p-3 m-2">
            <h1 className="font-playfair-display text-3xl  text-black lg:text-[52px]/[76px] text-center font-bold mt-[35px] lg:mt-[130px] mb-6 lg:w-3/4">
              Books to freshen up your bookshelf
            </h1>
            

            <div>
                <Link to="/list">
              <button className="btn bg-[#23BE0A] text-white lg:text-xl px-8 rounded-lg mr-6">
                View The List
              </button>
              </Link>
            </div>
          </div>
          <div className='flex items-center justify-center lg:mt-[80px] lg:mr-[120px] lg:w-1/4 '>
            <img src={banner} alt="" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
