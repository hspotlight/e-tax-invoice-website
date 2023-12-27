import { AxiosResponse } from "axios";
import { Shop } from "./types/Shop";

const axios = require("axios");
const eTaxDataUrl = "https://e-tax-invoice-data.s3.ap-southeast-1.amazonaws.com/data.json";

const getData = async (): Promise<AxiosResponse<Shop[]>> => {
  return axios.get(eTaxDataUrl);
};

const eTaxService = {
    getData
}

export default eTaxService;