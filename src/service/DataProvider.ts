import axios from "axios";
import { AxiosClient } from "./Axios";
import { API_ROUTES } from "../common/enums/routes";
import { trackPromise } from "react-promise-tracker";

export const getAllEmployees = async () => {
  try {
    const axiosClient = new AxiosClient();
    const { GET_ALL_EMPLOYEES } = API_ROUTES;
    const response = await trackPromise(axiosClient.get(GET_ALL_EMPLOYEES));
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(error.response.data.reason);

      throw error.response.data.reason;
    }

    throw error;
  }
};
