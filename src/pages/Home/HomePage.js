import React, { useEffect } from "react";
import albumImg from "../../images/mixtape.jpg";
import PlayList from "../../components/Sing/SingList";
import { useDispatch, useSelector } from "react-redux";
import { fetch } from "../../features/setting/songSlice";
import Coin from "react-cssfx-loading/lib/Coin";
import "./home.scss";

const HomePage = () => {
  const dispacth = useDispatch();
  const singState = useSelector((state) => state.music?.songs);
  const isLoading = useSelector((state) => state.music.loading);
  //DidUpdate
  useEffect(() => {
    dispacth(fetch());
  }, [dispacth]);

  return (
    <>
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
              <PlayList sings={singState} />
            </div>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="loading">
          <Coin className="loading__item" color="#0dcaf0" />{" "}
        </div>
      )}
    </>
  );
};

const shouldComponentUpdate = () => {
  // console.log(preProps, nextState);
  return false;
};

export default React.memo(HomePage, shouldComponentUpdate);
