import { AxiosResponse } from "axios";
import { Shop } from "../types/Shop";
import mockData from "../data/data.json";
// import mockCategory from "../data/category.json";

const axios = require("axios");
const eTaxDataUrl = "https://d16trc7yyw0dx9.cloudfront.net/data.json";

const getData = async (): Promise<Shop[]> => {
  // const result = await axios.get(eTaxDataUrl);
  // return result.data;
  return mockData as Shop[];
};

const eTaxService = {
    getData
}

export default eTaxService;