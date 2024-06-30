import { securedAxiosInstance } from "../api";

export const getTaskById = async () => {    
    try {
      return await securedAxiosInstance.get(`task/getTaskById`);
    } catch (error) {      
      return error.response;
    }
  };