import React from 'react';
import Container from './Container';

const CountBox = ({data}) => {
  
  const pendingData = data.filter(element => element.status === 'Pending');
  const SubmittedData = data.filter(element => element.status === 'Submitted');
  const ReviewedData = data.filter(element => element.status === 'Reviewed');
  // console.log({pendingData, SubmittedData, ReviewedData});

  return (
    <Container>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 my-10">
        <div className="rounded-md p-7 text-white h-[250px] bg-gray-600 flex items-center justify-center flex-col">
          <h2 className="font-bold text-4xl">Pending</h2>
          <p className="font-bold text-3xl">{pendingData.length}</p>
        </div>
        <div className="rounded-md p-7 text-white h-[250px] bg-purple-600 flex items-center justify-center flex-col">
          <h2 className="font-bold text-4xl">Submited</h2>
          <p className="font-bold text-3xl">{SubmittedData.length}</p>
        </div>
        <div className="rounded-md p-7 text-white h-[250px] bg-teal-600 flex items-center justify-center flex-col">
          <h2 className="font-bold text-4xl">Reviewed</h2>
          <p className="font-bold text-3xl">{ReviewedData.length}</p>
        </div>
      </div>
    </Container>
  );
};

export default CountBox;