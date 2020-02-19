import axios from 'axios';

export default {
  postForm: (data) => {
    const esmUrl = 'https://nmvason-flow.builtwithdark.com/esm';
    const promise = axios.post(esmUrl, data);

    return promise;
  },
};
