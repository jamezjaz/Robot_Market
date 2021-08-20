import axios from 'axios';
import { robotRequest, robotRequestSuccess } from '../redux/actionCreators';

const base = 'http://localhost:';
const PORT = 8000;
const path = 'api/robots';

const fetchRobots = () => dispatch => {
  const url = `${base}${PORT}${path}`;
  dispatch(robotRequest);
  axios.get(url, {
    method: 'GET',
    mode: 'cors',
  })
    .then(res => {
      const robotRes = res.data;
      dispatch(robotRequestSuccess(robotRes));
      console.log(robotRes);
    });
  // console.log(robotRes);
};

export default fetchRobots;
