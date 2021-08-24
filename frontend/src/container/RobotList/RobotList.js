import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import fetchRobots from '../../apiRequest/apiRequest';
import Robot from '../../components/Robot/Robot';
import RobotListStyles from './RobotListStyles.module.css';
import RobotFilter from '../RobotFilter/RobotFilter';
import { filterRobots } from '../../redux/actions/actionCreators';
import ReactPaginate from 'react-paginate';

const RobotList = props => {
  const { allRobots, fetchedRobots, filtered } = props;
  // console.log('all robots', allRobots);
  const [pageNumber, setPageNumber] = useState(0);
  // const dispatch = useDispatch();

  useEffect(() => {
    fetchedRobots(allRobots);
  }, []);

  const handleFilterChange = material => {
    const { filter } = props;
    filter(material);
  };

    // pagination
    const robotsPerPage = 10;
    const pagesVisited = pageNumber * robotsPerPage;
    const PaginateRobots = allRobots.slice(pagesVisited, pagesVisited + robotsPerPage);
    const pageCount = Math.ceil(allRobots.length / robotsPerPage);
    const changePage = ({selected}) => {
      setPageNumber(selected);
    }

  // filter paginatedRobots instead of allRobots
  const filteredRobots = PaginateRobots.filter(robot => (
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
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage }
        containerClassName={RobotListStyles.paginationBtns}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"paginateDisabled"}
        activeClassName={RobotListStyles.paginationActive}
      />
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
