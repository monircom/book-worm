import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const List = () => {
  return (
    <div>
      <div className="w-full h-[100px] bg-[rgba(19,19,19,0.05)] rounded-xl flex justify-center items-center">
        <h1 className="text-3xl font-bold">Books</h1>
      </div>

      <div className="flex justify-center mt-8 mb-14">
       
        <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn w-full m-1 bg-[#23BE0A] text-white text-xl font-semibold px-12">Sort By &nbsp; <img src="./images/down.png" alt="" /></div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Rating</a></li>
                <li><a>Number of Pages</a></li>
                <li><a>Publisher Year</a></li>
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
        <h2>Read Books</h2>
        </TabPanel>
        <TabPanel>
        <h2>Wishlist Books</h2>
        </TabPanel>
    </Tabs>
      </div>
           
       
      
      <ToastContainer />
    </div>
  );
};

export default List;
