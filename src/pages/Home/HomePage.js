import React, { useState, useEffect } from "react";
import albumImg from "../../images/mixtape.jpg";
import PlayList from "../../components/Sing/SingList";
import Layout from "../../Layout/Layout";
import "./home.scss";
import axios from "axios";

export default function (props) {
  const [singSate, setSingSate] = useState([]);
  console.log(1);

  useEffect( async () =>
      // (async function () {
      //   try {
      //     const { data } = await axios.get(
      //       "https://g0lq8.sse.codesandbox.io/sings"
      //     );
      //     setSingSate(data);
      //   } catch (error) {
      //     console.log(error);
      //     return;
      //   }
      // })();
      await axios
        .get("https://g0lq8.sse.codesandbox.io/sings")
        .then((res) => setSingSate(res.data)),
    []
  );

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4" style={{ position: "fixed", zIndex: "-1" }}>
            <div className="album__left">
              <div className="album__img">
                <img src={albumImg} alt="img" />
              </div>
              <div className="album__info">
                <div className="album__info-title album__info-item">
                  Mixtape Chiều Thu Họa Bóng Nàng
                </div>
                <div className="album__info-content album__info-item">
                  Cập nhật: 14/05/2021
                </div>
                <div className="album__info-content album__info-item">
                  DatKaa, Thiên Tú, Châu Khải Phong, ACV
                </div>
                <div className="album__info-content album__info-item">
                  4k người yêu thích
                </div>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="sings">
              <PlayList sings={singSate} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
