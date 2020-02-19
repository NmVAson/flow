import axios from 'axios';

export default {
  postForm: (data) => {
    const promise = axios
      .post('https://nmvason-flow.builtwithdark.com/esm', data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    return promise;
  },
};
