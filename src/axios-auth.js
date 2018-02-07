import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://vuejs-http-8f333.firebaseio.com'
});

instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;
