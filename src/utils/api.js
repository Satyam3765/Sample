import axios from "axios";
import { API_Key } from "../Variable/APIkey.js";
const BASE_URL = "https://api.themoviedb.org/3";


const headers = {
  
  Authorization: "bearer",
};



export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(BASE_URL + url + API_Key, {
      headers,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
