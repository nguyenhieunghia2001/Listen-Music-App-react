import React, { useContext, useState } from "react";
import albumImg from "../../images/mixtape.jpg";
import { SingContext } from "../../context/SingContext";
import SongLike from "../Like/SongLike";
import { FaPlay } from "react-icons/fa";
import "./song.scss";

const SongItem = function ({ sings }) {
  const { changeSing, currentSing } = useContext(SingContext);
  return (
    <tbody>
      {sings &&
        sings.map((sing) => (
          <tr
            key={sing.id}
            className={
              currentSing.sing && currentSing.sing.id === sing.id
                ? "sing-active"
                : ""
            }
          >
            <td>
              <div className="sings__info">
                <div
                  className="sings__info-img"
                  onClick={() => changeSing(sing)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={albumImg} />
                  <div className="sings__info-img-icon">
                    <FaPlay />
                  </div>
                </div>

                <div className="sings__info-content">
                  <h6>{sing.singName}</h6>
                  <span>{sing.singerName}</span>
                </div>
              </div>
            </td>
            <td className="align-middle">
              <div className="sings__time">{sing.time}</div>
            </td>
            <td className="align-middle">
              <div className="sings__control">
                <SongLike song={sing} />
              </div>
            </td>
          </tr>
        ))}
    </tbody>
  );
}
const shouldComponentUpdate = (preProps, nextState) => {
  // console.log(preProps, nextState);
  return false
}
export default React.memo(SongItem, shouldComponentUpdate);
