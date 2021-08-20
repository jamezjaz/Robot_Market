import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import RobotStyles from './RobotStyles.module.css';
import addBtn from '../../assets/add.gif';

const Robot = props => {
  const { robot } = props;
  return (
    <>
      <tbody>
        <tr>
          <td>
            <div className={RobotStyles.robotContainer}>
              <div className={RobotStyles.imgContainer}>
                <img src={robot.image} alt={robot.name} />
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <h5>{robot.name}</h5>
                  <h6>{`฿${robot.price}`}</h6>
                  <h6>{robot.stock}</h6>
                  <small>{format(new Date(robot.createdAt), 'dd-MM-yyyy')}</small>
                  <h6>{robot.material}</h6>
                </div>
                <div className="mt-5">
                  <button type="button" className="rounded-circle">
                    <img src={addBtn} alt="add" />
                  </button>
                </div>
              </div>
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
