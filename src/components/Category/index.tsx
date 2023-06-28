import { Button, Table } from "antd";
import "./style.less";
import Search from "../../design-components/Search";
import { useRef } from "react";
import useComputeHeight from "../../hooks/useHeight";
import { ColumnsType } from "antd/es/table";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Column 1",
    dataIndex: "address",
    key: "1",
    width: 150,
  },
  {
    title: "Column 2",
    dataIndex: "address",
    key: "2",
    width: 150,
  },
  {
    title: "Column 3",
    dataIndex: "address",
    key: "3",
    width: 150,
  },
  {
    title: "Column 4",
    dataIndex: "address",
    key: "4",
    width: 150,
  },
  {
    title: "Action",
    key: "5",
    fixed: "right",
    width: 100,
    render: () => <a>action</a>,
  },
];

const data: DataType[] = [];
for (let i = 1; i <= 15; i++) {
  data.push({
    key: i,
    name: `Edward ${i}`,
    age: i,
    address: `London Park no. ${i}`,
  });
}

const Category = () => {
  const refHeight = useRef(null);
  const height = useComputeHeight(refHeight);
  return (
    <div className="category">
      <h1 className="title"> Category</h1>
      <div className="nav-category">
        <Button
          className="add-category"
          type="primary"
          icon={<i className="fa-solid fa-plus"></i>}
        >
          Create New Category
        </Button>
        <Search />
      </div>
      <div className="table-category">
        <Table
          ref={refHeight}
          className="table-preview"
          pagination={{
            defaultPageSize: 20,
            showSizeChanger: true,
            pageSizeOptions: ["20", "50", "100"],
          }}
          columns={columns}
          dataSource={data}
          scroll={{
            y: height - 130,
          }}
        />
      </div>
    </div>
  );
};

export default Category;
