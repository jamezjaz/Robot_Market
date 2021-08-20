import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchRobots from '../../apiRequest/apiRequest';

const RobotList = props => {
  const { allRobots, fetchedRobots } = props;

  useEffect(() => {
    fetchedRobots(allRobots);
  }, []);

  return (
    <>
      <h2 className="text-center">HOT DEALS!</h2>
      <div>
        {allRobots.map(robot => (
          <div key={JSON.stringify(robot)}>
            <img src={robot.image} alt={robot.name} />
            <h5>{robot.name}</h5>
            <p>{`฿${robot.price}`}</p>
            <span>{robot.stock}</span>
            <small>{robot.createdAt}</small>
            <p>{robot.material}</p>
          </div>
        ))}
      </div>
    </>
  );
};

RobotList.propTypes = {
  allRobots: PropTypes.arrayOf(PropTypes.shape({})),
  fetchedRobots: PropTypes.func.isRequired,
};

RobotList.defaultProps = {
  allRobots: [],
};

const mapStateToProps = state => ({
  allRobots: state.robots.data,
});

const mapDispatchToProps = dispatch => ({
  fetchedRobots: robots => dispatch(fetchRobots(robots)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RobotList);
