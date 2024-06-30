import { securedAxiosInstance } from "../api";

export const getTasksAnalytics = async () => {    
    try {
      return await securedAxiosInstance.get(`task/getTasksAnalytics`);
    } catch (error) {      
      return error.response;
    }
  };