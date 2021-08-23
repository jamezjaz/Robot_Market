import React from 'react';
import { useSelector } from 'react-redux';

const DisplayTotal = () => {
  const total = useSelector(state => state.robot.total);
  return (
    <>
      <div>
        <h4>
          Total:
          ฿
          {/* {total} */}
          {/* {parseInt(total, 10)} */}
          {total.replace(/^0+/, '')}
        </h4>
      </div>
    </>
  );
};

export default DisplayTotal;