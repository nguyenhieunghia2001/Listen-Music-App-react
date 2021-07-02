import React, { useContext } from "react";
import singImg from "../../images/sing.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.scss";
import { SingContext } from "../../context/SingContext";
import Player from "../../components/Sing/PlaySong";

export default function () {
  const { currentSing } = useContext(SingContext);
  return (
    <div className="container footer">
      <div className="row align-items-end">
        <div className="col-4">
          <div className="currentPlay d-flex align-items-center">
            <div className="currentPlay__avatar">
              <img src={singImg} alt="" />
            </div>
            <div className="currentPlay__info">
              <div className="currentPlay__info-singName">

                {currentSing && (currentSing?.sing?.singName || 'Chưa chọn bài hát')}
              </div>
              <div className="currentPlay__info-singerName">{currentSing && currentSing?.sing?.singerName}</div>
            </div>
            <div className="currentPlay__icons">
              <FontAwesomeIcon className="" icon="heart" />
            </div>
          </div>
        </div>
        <div className="col-4">
          
            <Player url={currentSing && currentSing?.sing?.song}/>
         
        </div>
        <div className="col-4 d-flex justify-content-end">
          <div className="referent">
            <FontAwesomeIcon icon="ad" />
          </div>
        </div>
      </div>
    </div>
  );
}
