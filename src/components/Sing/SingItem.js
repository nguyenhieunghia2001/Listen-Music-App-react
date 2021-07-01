import React, { useContext } from "react";
import albumImg from "../../images/mixtape.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SingContext } from "../../context/SingContext";

export default function ({ sings }) {
  const { changeSing } = useContext(SingContext);
  return (
    <tbody>
      {sings &&
        sings.map((sing) => (
          <tr key={sing.id}>
            <td>
              <div className="sings__info">
                <img src={albumImg} onClick={() => changeSing(sing)} style={{cursor: "pointer"}}/>
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
                <FontAwesomeIcon className="" icon="heart" />
              </div>
            </td>
          </tr>
        ))}
    </tbody>
  );
}
