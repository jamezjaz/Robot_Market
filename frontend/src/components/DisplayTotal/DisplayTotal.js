import React from 'react';
import { useSelector } from 'react-redux';

const DisplayTotal = () => {
  const total = useSelector(state => state.robot.total);

  return (
    <>
      <div>
        <h4 className="text-center">
          <b>
            Total:
            ฿
            {total}
          </b>
        </h4>
      </div>
    </>
  );
};

export default DisplayTotal;