import { securedAxiosInstance } from "../api";

export const updateTask = async (taskId,data) => {    
    try {
      return await securedAxiosInstance.put(`task/updateTask/${taskId}`,data);
    } catch (error) {      
      return error.response;
    }
  };