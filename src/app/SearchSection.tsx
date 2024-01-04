"use client";

import React from "react";
import { styled, alpha, InputBase, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import eTaxService from "./services/eTaxService";
import searchService from "./services/searchService";
import { Shop } from "./types/Shop";
import ShopTable from "./ShopTable";
import Page from "./faq/page";
import useCustomMediaQuery from "./hooks/useCustomMediaQuery";
import FiberNewIcon from "@mui/icons-material/FiberNew";
// import CategorySelect from "./components/CategorySelect";
import { Category } from "./types/Category";
import ShopAndReferences from "./ShopAndReferences";
import shopAndReferencesData from "./data/shop-and-reference.json";

const getDistinctCategories = (data: Shop[]): Category[] => {
  const categories: Record<string, string> = {};
  data.forEach((d) => {
    categories[d.isicCode] = d.isicName;
  });
  const result: Category[] = Object.entries(categories).map((c) => {
    return {
      isicCode: c[0],
      isicName: c[1],
    };
  });
  return result;
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchSection = () => {
  const { isDesktop } = useCustomMediaQuery();
  const [data, setData] = React.useState<Shop[]>([]);
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [isLoading, setLoading] = React.useState<boolean>(true);

  const fetchData = async () => {
    const data = await eTaxService.getData();
    // setCategories(getDistinctCategories(data));
    setData(data);
    searchService.initialize();
    searchService.setData(data);

    setLoading(false);
  };

  const searchTextOnType = (givenText: string) => {
    const result = searchService.searchText(givenText);
    setData(result);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={isDesktop ? "px-24 pt-24 pb-12" : "px-4 pt-4 pb-4"}>
      <Typography variant="h6" className="text-center">
        รายชื่อผู้ประกอบการที่ได้รับอนุมัติให้จัดทำ ส่งมอบ
        และเก็บรักษาใบกำกับภาษีอิเล็กทรอนิกส์ และใบรับอิเล็กทรอนิกส์
      </Typography>
      <Typography
        variant="body1"
        className="text-center"
        style={{ color: "blue" }}
      >
        ร้านค้าอยู่ในรายชื่อของการจัดทำใบกำกับภาษี/ใบรับ ในรูปแบบอิเล็กทรอนิกส์
        ทั้งนี้
        ขอให้ท่านสอบถามทางร้านค้าโดยตรงว่าสามารถออกใบกำกับภาษีในรูปแบบอิเล็กทรอนิกส์ได้หรือไม่
      </Typography>
      <div className="flex justify-center py-4">
        {/* <CategorySelect categories={categories} /> */}
        <Search className="flex align-center">
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="ชื่อผู้เสียภาษี"
            inputProps={{ "aria-label": "search" }}
            onChange={(e) => {
              searchTextOnType(e.target.value);
            }}
          />
        </Search>
      </div>
      <ShopTable data={data} isLoading={isLoading} />
      <Typography variant="body1" className="mt-8">
        รวมร้านค้าที่สามารถออก e-tax invoice & e-receipt ได้​
        (รวมในนี้จะได้ดูง่ายๆครับ) <FiberNewIcon style={{ color: "red" }} />
      </Typography>
      <ShopAndReferences data={shopAndReferencesData} />
      {/*<Page />*/}
    </div>
  );
};

export default SearchSection;
