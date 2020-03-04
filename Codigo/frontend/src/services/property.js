import axios from "axios";
let baseURL;

/*
process.env.NODE_ENV === 'production'
  ? (baseURL = 'here should be your production endpoint')
  : ();
*/

baseURL = "https://backendrent.herokuapp.com";

const service = axios.create({ withCredentials: true, baseURL });

const PROP_SERVICE = {
  create: async (property, user) => {
    return await service.post("/property", property, {
      headers: { auth: user.id }
    });
  },

  getOwnerProperties: async user => {
    return await service.get('/property', {
      headers: { auth: user.id }
    })
  }
};


export default PROP_SERVICE;
