
import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';


const Read = () => {

  const [readData, setReadData] = useState ([]); 

  useEffect(()=>{
    const getReadData = JSON.parse(localStorage.getItem("reads")) || [];
    setReadData(getReadData);
  },[]);


  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink','#FBB929','#FC8042','#0085F6'];


const data = [...readData] || [];


const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

function CustomTooltip({ payload, label, active }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label}`}</p>
        <p className="label">Page: {` ${payload[0]?.value}`}</p>
      </div>
    );
  }

  return null;
}

    return (
        <div>          
        <div className='bg-base-200 rounded-lg py-10' style={{ width: '100%', height: 700 }}>           
            <ResponsiveContainer>
            <BarChart
                width={1000}
                height={500}
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} wrapperStyle={{ backgroundColor: '#ccc' }}/>
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                  ))}
                </Bar>
                
              </BarChart>
              </ResponsiveContainer>
          </div>
          </div>
              );
  };

export default Read;