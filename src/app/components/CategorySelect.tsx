import { Select, MenuItem } from "@mui/material";
import { Category } from "../types/Category";
import React from "react";

const CategorySelect = ({ categories }: { categories: Category[] }) => {
  const [selectedCategoryCode, setCategoryCode] = React.useState<string>("-");

  return (
    <Select
      labelId="category-select-label"
      id="category-select"
      value={selectedCategoryCode}
      defaultValue="-"
      onChange={(e) => setCategoryCode(e.target.value)}
      placeholder="ประเภทกิจการ"
    >
      <MenuItem value="-">ทุกประเภทกิจการ</MenuItem>
      {categories.map((c) => (
        <MenuItem key={c.isicCode} value={c.isicCode}>
          {c.isicName}
        </MenuItem>
      ))}
    </Select>
  );
};

export default CategorySelect;
