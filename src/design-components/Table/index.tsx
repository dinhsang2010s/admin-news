import { Table as TableAntd, TableProps } from "antd";
import { useRef } from "react";
import useComputeHeight from "../../hooks/useHeight";
import "./style.less";

const Table = (props: TableProps<any>) => {
  const refHeight = useRef(null);
  const height = useComputeHeight(refHeight);

  return (
    <TableAntd
      {...props}
      ref={refHeight}
      className="table-preview"
      bordered
      pagination={{
        defaultPageSize: 20,
        showSizeChanger: true,
        pageSizeOptions: ["20", "50", "100"],
      }}
      scroll={{
        y: height ? height - 140 : 500,
      }}
    />
  );
};

export default Table;
