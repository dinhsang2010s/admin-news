import { Input } from "antd";
import "./style.less";

const Search = ({
  height,
  width,
}: {
  height?: number | string;
  width?: number | string;
}) => {
  return (
    <Input
      style={{
        height: height ?? 40,
        width: width ?? 220,
      }}
      prefix={<i className="fa-solid fa-magnifying-glass"></i>}
      className="search-header"
      placeholder="Search..."
    />
  );
};

export default Search;
