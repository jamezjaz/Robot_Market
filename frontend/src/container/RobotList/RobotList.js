import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import fetchRobots from '../../apiRequest/apiRequest';
import Robot from '../../components/Robot/Robot';

const RobotList = props => {
  const { allRobots, fetchedRobots } = props;
  // console.log('all robots', allRobots);

  useEffect(() => {
    fetchedRobots(allRobots);
  }, []);

  return (
    <>
      <h2 className="text-center">HOT DEALS!</h2>
      <table className="container-fluid d-flex flex-wrap">
        {allRobots.map(robot => (
          <Robot
            key={uuid()}
            robot={robot}
          />
        ))}
      </table>
    </>
  );
};

RobotList.propTypes = {
  allRobots: PropTypes.arrayOf(PropTypes.shape({})),
  // allRobots: PropTypes.arrayOf({}),
  fetchedRobots: PropTypes.func.isRequired,
};

RobotList.defaultProps = {
  allRobots: [],
};

const mapStateToProps = state => ({
  allRobots: state.robot.robots.data,
});

// const mapStateToProps = state => {
//   console.log('State', state.robot);
// };

const mapDispatchToProps = dispatch => ({
  fetchedRobots: robots => dispatch(fetchRobots(robots)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RobotList);
