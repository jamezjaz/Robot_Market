import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import fetchRobots from '../../apiRequest/apiRequest';

const RobotList = () => {
  useEffect(() => {

  });

  return (
    <>
      <h2 className="text-center">HOT DEALS!</h2>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchedRobots: robots => dispatch(fetchRobots(robots)),
});

export default connect(null, mapDispatchToProps)(RobotList);
