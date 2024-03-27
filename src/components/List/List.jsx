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
        <select className="select w-full max-w-xs bg-[#23BE0A] text-white text-xl font-semibold">
            <option disabled selected>Sort By</option>
            <option>Rating</option>
            <option>Number of Pages</option>
            <option>Publisher Year</option>            
        </select>
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
