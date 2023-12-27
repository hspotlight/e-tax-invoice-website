import { Shop } from "./types/Shop";

let data: Shop[] = [];

const setData = (newData: Shop[]) => {
    data = newData;
}

const searchText = (text: string) => {
    if (text === null || text === undefined || text.length === 0) return data;
    return data.filter(d => d.name.indexOf(text) > 0)
}

const searchService = {
    setData,
    searchText
}

export default searchService;