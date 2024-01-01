import { Link } from "@mui/material";

const ShopAndReference = ({ name, link }: { name: string; link: string }) => {
  return (
    <>
      {name}{" "}
      <Link href={link} target="_blank" rel="noopener">
        ดูรายละเอียดที่นี่
      </Link>
    </>
  );
};

export default ShopAndReference;
