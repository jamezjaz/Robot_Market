import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchRobots from '../../apiRequest/apiRequest';
import Robot from '../../components/Robot/Robot';

const RobotList = props => {
  const { allRobots, fetchedRobots } = props;

  useEffect(() => {
    fetchedRobots(allRobots);
  }, []);

  return (
    <>
      <h2 className="text-center">HOT DEALS!</h2>
      <table>
        {allRobots.map(robot => (
          <Robot
            key={JSON.stringify(robot)}
            robot={robot}
          />
        ))}
      </table>
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
