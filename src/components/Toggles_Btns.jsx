import React from 'react';
import Container from './Container';

const Toggles_Btns = ({ toggleStatus, setToggleStatus }) => {
  const btns = ['All', 'Pending', 'Submitted', 'Reviewed'];

  return (
    <Container>
      <div className="text-right mb-12 ">
        {
          btns.map((btn, index) => {
            return (
              <button key={index} onClick={() => setToggleStatus(btn)} className={`
              toggle-btn
              ${index === 0 && 'rounded-l-md'} 
              ${index === btns.length - 1 && 'rounded-r-md'} 
              ${toggleStatus === btn && '!bg-purple-500 !text-white'}`}>{btn}</button>
            )
          })
        }
      </div>
    </Container>
  );
};

export default Toggles_Btns;