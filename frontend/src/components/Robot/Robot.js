import React from 'react';
import PropTypes from 'prop-types';

const Robot = props => {
  const { robot } = props;
  return (
    <>
      <tbody>
        <tr>
          <td>
            <div>
              <img src={robot.image} alt={robot.name} />
              <h5>{robot.name}</h5>
              <p>{`฿${robot.price}`}</p>
              <span>{robot.stock}</span>
              <small>{robot.createdAt}</small>
              <p>{robot.material}</p>
            </div>
          </td>
        </tr>
      </tbody>
    </>
  );
};

Robot.propTypes = {
  robot: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    stock: PropTypes.number,
    createdAt: PropTypes.string,
    material: PropTypes.string,
  }).isRequired,
};

export default Robot;
