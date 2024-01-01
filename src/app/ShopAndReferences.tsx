import { Link } from "@mui/material";

const ShopAndReferences = ({
  data,
}: {
  data: { name: string; link: string }[];
}) => {
  return (
    <ol>
      {data.map(({ name, link }) => {
        return (
          <li key={name}>
            - {name}{" "}
            <Link href={link} target="_blank" rel="noopener">
              ดูรายละเอียดที่นี่
            </Link>
          </li>
        );
      })}
    </ol>
  );
};

export default ShopAndReferences;
