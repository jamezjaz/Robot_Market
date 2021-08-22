import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { connect } from 'react-redux';
import RobotStyles from './RobotStyles.module.css';
import addBtn from '../../assets/add.gif';
// import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/actionCreators';

const Robot = props => {
  const { robot } = props;
  // const dispatch = useDispatch();

  const handleAddToCart = id => {
    const { addItemsToCart } = props;
    console.log('Added to cart');
    // dispatch(addToCart(id));
    addItemsToCart(id);
  };

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
                  <button
                    type="button"
                    className="rounded-circle"
                    onClick={() => { handleAddToCart(robot.id); }}
                  >
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

const mapDispatchToProps = dispatch => ({
  addItemsToCart: id => dispatch(addToCart(id)),
});

export default connect(null, mapDispatchToProps)(Robot);
