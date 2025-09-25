import React from 'react';

const Card = ({ issue, index, setData, data }) => {
  // console.log(issue);

  const handleClick = () => {
    const currentData = data.find(element => element.ticketId === issue.ticketId);
    if(currentData.status === 'Pending'){
      currentData.status = 'Submitted';
    }else if (currentData.status === 'Submitted'){
      currentData.status = 'Reviewed';
    }
    console.log(currentData);

    const restData = data.filter(element => element.ticketId !== issue.ticketId);
    console.log(restData);

    setData([currentData, ...restData])
  }

  return (
    <div key={index} className='shadow-md rounded-md cursor-pointer bg-slate-100 p-4' onClick={handleClick}>
      <div className='space-y-2'>
        <img src={issue.userImg}
          title={issue.requestedBy}
          alt={issue.requestedBy}
          className='h-20 w-20 rounded-full object-cover' />
        <h2 className='font-semibold text-lg'>{issue.requestedBy}</h2>
      </div>

      <div className='flex justify-between items-center space-y-2'>
        <h2 className='font-bold text-2xl'>{issue.subject}</h2>
        <div className='space-x-2'>
          <span className={`font-semibold px-2 rounded-sm py-1 shadow ${issue.priority === 'High' ? 'text-white bg-red-500' :
            issue.priority === 'Medium' ? 'text-black bg-yellow-500' :
              'text-black bg-green-500'
            }`}>{issue.priority}</span>
          <span className={`font-semibold px-2 rounded-sm py-1 shadow ${issue.status === 'Pending' ? 'text-white bg-red-500' :
            issue.status === 'Submitted' ? 'text-black bg-yellow-500' :
              'text-black bg-green-500'
            }`}>{issue.status}</span>
        </div>
      </div>
      <p className='text-lg text-slate-700'>{issue.description}</p>
    </div>
  );
};

export default Card;