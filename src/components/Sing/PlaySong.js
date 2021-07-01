import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Player = ({ url }) => {
    const [playing, toggle] = useAudio(url);

    return (
        // <div>
        //     <div onClick={toggle}>
        //         {playing ? <FontAwesomeIcon icon="pause" /> : <FontAwesomeIcon icon="play" />}
        //     </div>
        //     {/* <button onClick={changeMp3}>tt</button> */}
        // </div>
        <div className="sing">
            <div className="sing__control d-flex justify-content-around align-items-center">
                <div className="sing__control-item">
                    <FontAwesomeIcon icon="redo" />
                </div>
                <div className="sing__control-item">
                    <FontAwesomeIcon icon="step-backward" />
                </div>
                <div className="sing__control-item">
                    {/* <FontAwesomeIcon icon="faPause" /> */}
                    <Player url={currentSing && currentSing?.sing?.song} />
                </div>
                <div className="sing__control-item">
                    <FontAwesomeIcon icon="step-forward" />
                </div>
                <div className="sing__control-item">
                    <FontAwesomeIcon icon="random" />
                </div>
            </div>
            <input
                type="range"
                className="progress"
                value="0"
                step="1"
                min="0"
                max="100"
            />
        </div>
    );
};

export default Player;
