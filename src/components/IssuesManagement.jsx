import React, { use, useState } from 'react';
import Toggles_Btns from './Toggles_Btns';
import CountBox from './CountBox';
import Container from './Container';
import Card from './Card';

const IssuesManagement = ({ fetchPromise }) => {
  const [toggleStatus, setToggleStatus] = useState('All');
  const initialData = use(fetchPromise);
  const [data, setData] = useState(initialData);

  const filteredData = toggleStatus === 'All' ? data : 
  data.filter(element => element.status === toggleStatus);

  // console.log(toggleStatus, filteredData);

  return (
    <div>
      {/*box*/}
      <CountBox data={data}/>

      {/* Toggles Buttons */}
      <Toggles_Btns toggleStatus={toggleStatus} setToggleStatus={setToggleStatus} />

      {/* cards */}
      <Container>
        {filteredData.length === 0 ? 
        <h2 className='font-bold text-2xl text-center my-5 py-2 rounded-xl border border-gray-300 shadow-sm w-1/5 mx-auto'>No Data</h2> : 
        <div className='grid grod-cols-1 md:grid-cols-3 gap-7 mb-6'>
          {
            filteredData.map((issue, index) => {
              return (
                <Card issue={issue} index={index} data={data} setData={setData}></Card>
              )
            })
          }
        </div>}
      </Container>    
    </div>
  );
};

export default IssuesManagement;
