import { AxiosResponse } from "axios";
import { Shop } from "../types/Shop";

const axios = require("axios");
const eTaxDataUrl = "https://d16trc7yyw0dx9.cloudfront.net/data.json";

const getData = async (): Promise<AxiosResponse<Shop[]>> => {
  return axios.get(eTaxDataUrl);
};

const eTaxService = {
    getData
}

export default eTaxService;