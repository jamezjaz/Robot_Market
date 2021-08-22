import React from 'react';
import { useSelector } from 'react-redux';
import uuid from 'react-uuid';
import RobotFilterStyles from './RobotFilterStyles.module.css';

const RobotFilter = props => {
  const robots = useSelector(state => state.robot.robots.data);
  console.log(robots);
  const materials = ['All'];
  const { handleFilter } = props;

  // pushes material property of robots to materials var
  robots.map(robot => {
    materials.push(robot.material);
  });

  const handleChange = event => {
    const { value } = event.target;
    if (value === 'All') {
      handleFilter(null);
    } else {
      handleFilter(value);
    }
  };

  return (
    <>
      <label htmlFor="select" className={RobotFilterStyles.label}>
        <select className={RobotFilterStyles.select} onChange={handleChange}>
          <option>MATERIAL TYPE</option>
          {materials.map(material => (
            <option key={uuid()} value={material}>
              {material}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};

export default RobotFilter;
