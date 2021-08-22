import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import fetchRobots from '../../apiRequest/apiRequest';
import Robot from '../../components/Robot/Robot';
import RobotListStyles from './RobotListStyles.module.css';
import RobotFilter from '../RobotFilter/RobotFilter';
import { filterRobots } from '../../redux/actions/actionCreators';

const RobotList = props => {
  const { allRobots, fetchedRobots, filtered } = props;
  // console.log('all robots', allRobots);

  useEffect(() => {
    fetchedRobots(allRobots);
  }, []);

  const handleFilterChange = material => {
    const { filter } = props;
    filter(material);
  };

  const filteredRobots = allRobots.filter(robot => (
    !!((filtered === null || filtered === robot.material))));

  return (
    <>
      <div className={RobotListStyles.dealsFilter}>
        <h2 className="text-center mx-4">HOT DEALS!</h2>
        <RobotFilter handleFilter={handleFilterChange} />
      </div>
      <table className="container-fluid d-flex flex-wrap">
        {filteredRobots.map(robot => (
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
  filtered: state.filter,
});

// const mapStateToProps = state => {
//   console.log('State', state.robot);
// };

const mapDispatchToProps = dispatch => ({
  fetchedRobots: robots => dispatch(fetchRobots(robots)),
  filter: material => dispatch(filterRobots(material)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RobotList);
