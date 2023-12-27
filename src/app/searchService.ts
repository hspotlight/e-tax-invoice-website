import { Shop } from "./types/Shop";

let data: Shop[] = [];

const setData = (newData: Shop[]) => {
    data = newData;
}

const searchText = (text: string) => {
    return data.filter(d => d.name.indexOf(text) > 0)
}

const searchService = {
    setData,
    searchText
}

export default searchService;