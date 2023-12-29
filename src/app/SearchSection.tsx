"use client";

import React from "react";
import { styled, alpha, InputBase, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import eTaxService from "./eTaxService";
import searchService from "./searchService";
import { Shop } from "./types/Shop";
import ShopTable from "./ShopTable";
import Faq from "./Faq";
// import mockData from "./data/data.json";

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
  const [data, setData] = React.useState<Shop[]>([]);

  const fetchData = async () => {
    const result = await eTaxService.getData();
    setData(result.data);
    searchService.setData(result.data);
  };

  const searchTextOnType = (givenText: string) => {
    const result = searchService.searchText(givenText);
    setData(result);
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Typography variant="h6">
        รายชื่อผู้ประกอบการที่ได้รับอนุมัติให้จัดทำ ส่งมอบ
        และเก็บรักษาใบกำกับภาษีอิเล็กทรอนิกส์ และใบรับอิเล็กทรอนิกส์
      </Typography>
      <div className="flex justify-center py-4">
        <Search>
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
      <ShopTable data={data} />
      <Faq/>
    </div>
  );
};

export default SearchSection;
