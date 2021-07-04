import React from "react";
import { Table } from "reactstrap";
import SingItem from "./SingItem";

const SingList = function ({ sings }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Bài hát</th>
          <th>Thời gian</th>
          <th>Mặc định</th>
        </tr>
      </thead>
      <SingItem sings={sings} />
    </Table>
  );
}
const shouldComponentUpdate= (nextProps, nextState)=> {
  return false;
}

export default React.memo(SingList, shouldComponentUpdate);
