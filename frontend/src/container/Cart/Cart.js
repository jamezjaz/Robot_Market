import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addQuantity, removeItem, subtractQuantity } from '../../redux/actions/actionCreators';
import sortUp from '../../assets/sort-up.png';
import sortDown from '../../assets/sort-down.png';
import uuid from 'react-uuid';

const Cart = props => {
  const { addedItems } = props;
  const addedItemsLen = addedItems.length;
  console.log('Added items', addedItems);

  // to remove the item completely
  const handleRemove = id => {
    const { removedItem } = props;
    removedItem(id);
  };

  // to add the quantity
  const handleAddQuantity = id => {
    const { addQty } = props;
    addQty(id);
  };

  // to subtract from the quantity
  const handleSubQuantity = id => {
    const { subtractQty } = props;
    subtractQty(id);
  };

  return (
    <>
      <div className="container-fluid d-flex justify-content-center">
        <h3>Your Added Items:</h3>
        {addedItemsLen
          ? (
            addedItems.map(item => (
              <div key={uuid()}>
                <div>
                  <img src={item.image} alt={item.name} />
                </div>
                <div>
                  <h5>{item.name}</h5>
                  <h4>
                    <b>
                      Price:
                      {' '}
                      {`฿${item.price}`}
                    </b>
                  </h4>
                  <span>
                    Material:
                    {' '}
                    {item.material}
                  </span>
                  <p>
                    <b>
                      Quantity:
                      {' '}
                      {item.quantity}
                    </b>
                  </p>
                </div>
                <Link
                  to="/cart"
                  onClick={() => { handleAddQuantity(item.id); }}
                >
                  <img
                    src={sortUp}
                    alt="sort up"
                  />
                </Link>
                <Link
                  to="/cart"
                  onClick={() => { handleSubQuantity(item.id); }}
                >
                  <img
                    src={sortDown}
                    alt="sort down"
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => { handleRemove(item.id); }}
                >
                  Remove
                </button>
              </div>
            ))
          )
          : (
              <p>Nothing!</p>
          )}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  addedItems: state.robot.addedItems,
  state: console.log('State', state.robot.addedItems),
});

// const mapStateToProps = state => {
//   console.log('State, addedItems', state.robot.addedItems);
// };

const mapDispatchToProps = dispatch => ({
  removedItem: id => dispatch(removeItem(id)),
  addQty: id => dispatch(addQuantity(id)),
  subtractQty: id => dispatch(subtractQuantity(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
