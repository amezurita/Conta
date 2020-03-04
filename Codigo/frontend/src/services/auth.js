import axios from 'axios';
let baseURL;

/*
process.env.NODE_ENV === 'production'
  ? (baseURL = 'here should be your production endpoint')
  : ();
*/
  baseURL = 'https://backendrent.herokuapp.com'

const service = axios.create({ withCredentials: true, baseURL });

const MY_SERVICE = {
  test: async () => {
    return await service.get('/');
  },
  signup: async (user) => {
    return await service.post('/signup', user);
    
  },
  login: async (user) => {
    return await service.post('/login', user);
  },
  logOut: async () => {
    return await service.get('/logout');
  }

};

export default MY_SERVICE;
