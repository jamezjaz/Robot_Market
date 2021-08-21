import axios from 'axios';
import {
  robotRequest,
  robotRequestFailure,
  robotRequestSuccess,
} from '../redux/actions/actionCreators';

// const base = 'http://localhost:';
// const PORT = 8000;
// const path = '/api/robots';

const fetchRobots = () => dispatch => {
  // const url = `${base}${PORT}${path}`;
  const url = 'http://localhost:8000/api/robots';
  dispatch(robotRequest);
  axios.get(url, {
    method: 'GET',
    mode: 'cors',
  })
    .then(res => {
      const robotRes = res.data;
      dispatch(robotRequestSuccess(robotRes));
      console.log(robotRes);
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(robotRequestFailure(errorMsg));
    });
};

export default fetchRobots;
