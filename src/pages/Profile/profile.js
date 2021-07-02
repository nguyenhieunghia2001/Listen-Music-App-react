import React, { useContext } from "react";
import { Table, Container, Row } from "reactstrap";
import SingItem from "../../components/Sing/SingItem";
import { SingContext } from "../../context/SingContext";
import Layout from "../../Layout/Layout";

export default function () {
  const { songLikeList, currentSing } = useContext(SingContext);

  return (
    <Layout>
      <Table>
        <thead>
          <tr>
            <th>Bài hát</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <SingItem sings={songLikeList} />
      </Table>
    </Layout>
  );
}
