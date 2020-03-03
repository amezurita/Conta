import axios from 'axios';
let baseURL;

/*
process.env.NODE_ENV === 'production'
  ? (baseURL = 'here should be your production endpoint')
  : ();
*/
  baseURL = 'http://localhost:8080'
  const service = axios.create({ withCredentials: true, baseURL });

  const PROP_SERVICE ={
    create: async (property) => {
        return await service.post('/property', property)}

  }
  export default PROP_SERVICE