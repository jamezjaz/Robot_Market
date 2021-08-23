import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addQuantity, removeItem, subtractQuantity } from '../../redux/actions/actionCreators';
import sortUp from '../../assets/sort-up.png';
import sortDown from '../../assets/sort-down.png';
import uuid from 'react-uuid';
import DisplayTotal from '../../components/DisplayTotal/DisplayTotal';
import cartStyles from './CartStyles.module.css';

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
      <div className={cartStyles.container}>
        <h3>Your Added Items:</h3>
        {addedItemsLen
          ? (
            addedItems.map(item => (
              <div key={uuid()} className={cartStyles.card}>
                <div>
                  <img src={item.image} alt={item.name} className={cartStyles.img} />
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
                    className={cartStyles.sortUp}
                  />
                </Link>
                <Link
                  to="/cart"
                  onClick={() => { handleSubQuantity(item.id); }}
                >
                  <img
                    src={sortDown}
                    alt="sort down"
                    className={cartStyles.sortDown}
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => { handleRemove(item.id); }}
                  className={cartStyles.remove}
                >
                  Remove
                </button>
              </div>
            ))
          )
          : (
              <p>Nothing!</p>
          )}
        <div className="cart">
          <h5>You have added:</h5>
          <ul className="collection">
            {addedItemsLen}
            {' '}
            <span>items to cart</span>
          </ul>
        </div>
        <DisplayTotal />
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
