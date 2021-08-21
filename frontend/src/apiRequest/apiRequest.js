import axios from 'axios';
import uuid from 'react-uuid';
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
      const robotRes = res.data.map(robot => {
        // generates unique ids from react-uuid
        const uniqueId = uuid();
        return {
          ...robot,
          id: uniqueId,
        };
      });
      dispatch(robotRequestSuccess(robotRes));
      console.log(robotRes);
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(robotRequestFailure(errorMsg));
    });
};

export default fetchRobots;
