import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production" ? "prod_url" : "http://localhost:8080";

const service = axios.create({ withCredentials: true, baseURL });

const PAYMENT_SERVICE = {
  create: async (property, user) => {
    return await service.post("/payment", property, {
      headers: { auth: user.id }
    });
  },

  done: async (payment, user) => {
    return await service.post("/payment-done",
      {
        payment_id: payment._id
      },
      {
        headers: { auth: user.id }
      });
  }
};

export default PAYMENT_SERVICE;
