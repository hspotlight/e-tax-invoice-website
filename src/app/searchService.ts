import MiniSearch from "minisearch";
import { Shop } from "./types/Shop";

let data: Shop[] = [];
let searchInstance: MiniSearch;

const initialize = () => {
  searchInstance = new MiniSearch<Shop[]>({
    idField: "tax",
    fields: ["name", "isvat", "tax"],
    storeFields: ["name", "isvat", "tax", "type", "createdate", "updatedate"],
    searchOptions: {
      prefix: true,
      fuzzy: true,
      boost: {
        name: 2,
      },
    },
  });
};

const setData = (newData: Shop[]) => {
  data = newData;
  searchInstance.removeAll();
  searchInstance.addAll(newData);
};

const searchText = (text: string) => {
  if (!searchInstance) return data;
  if (text === null || text === undefined || text.length === 0) return data;
  // Search result actually contains extra fields, but is not used
  return searchInstance.search(text) as unknown as Shop[];
};

const searchService = {
  initialize,
  setData,
  searchText,
};

export default searchService;
