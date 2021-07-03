import React, { useState, useEffect, useRef, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TimeSlider from "react-input-slider";
import { SingContext } from "../../context/SingContext";

const Player = ({ url }) => {
  const audioRef = useRef();
  const { currentSing, changeSing, songLikeList } = useContext(SingContext);
  const [songsState, setSongsState] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(currentSing.sing ? true : false);
  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
    if (isPlay) audioRef.current.play();
  };

  const toggle = () => setPlay(!isPlay);

  //DidMount
  useEffect(() => {
    // console.log('didMount Playsong');
    const songs = localStorage.getItem("songs");
    songs && setSongsState(JSON.parse(songs));
  }, []);

  //DidUpdate
  useEffect(() => {
    isPlay ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlay]);
  useEffect(() => {
    setPlay(true);
  }, [currentSing]); // chuyển bài hát tự động play

  const handleTimeSliderChange = ({ x }) => {
    audioRef.current.currentTime = x;
    setCurrentTime(x);

    if (!isPlay) {
      setPlay(true);
      audioRef.current.play();
    }
  };
  const hanleSongs = {
    getSongWithRequest: function (control) {
      try {
        const index = songsState
          .map((item) => item.id)
          .indexOf(currentSing.sing.id);
        const song = control === "NEXT" ? songsState[index + 1] : songsState[index - 1];
        return song;
      } catch (error) {
        return undefined;
      }
    },
    nextSong: function () {
      if (currentSing) {
        const song = hanleSongs.getSongWithRequest("NEXT");
        song && changeSing(song);
      }
    },
    preSong: function () {
      if (currentSing) {
        const song = hanleSongs.getSongWithRequest("PRE");
        song && changeSing(song);
      }
    },

  };
  return (
    <div className="sing">
      <div className="sing__control d-flex justify-content-around align-items-center">
        <div className="sing__control-item">
          <FontAwesomeIcon icon="redo" />
        </div>
        <div className="sing__control-item" onClick={hanleSongs.preSong}>
          <FontAwesomeIcon icon="step-backward" />
        </div>
        <div className="sing__control-item" onClick={toggle}>
          {isPlay ? (
            <FontAwesomeIcon icon="pause" />
          ) : (
            <FontAwesomeIcon icon="play" />
          )}
        </div>
        <div className="sing__control-item" onClick={hanleSongs.nextSong}>
          <FontAwesomeIcon icon="step-forward" />
        </div>
        <div className="sing__control-item">
          <FontAwesomeIcon icon="random" />
        </div>
      </div>
      <TimeSlider
        axis="x"
        xmax={duration}
        x={currentTime}
        onChange={handleTimeSliderChange}
        styles={{
          track: {
            backgroundColor: "#fff",
            height: "2px",
            width: "100%",
          },
          active: {
            backgroundColor: "#fff",
            height: "2px",
          },
          thumb: {
            width: "8px",
            height: "8px",
            backgroundColor: "#fff",
            borderRadius: "50%",
          },
          width: "100%",
        }}
      />
      <audio
        ref={audioRef}
        src={url}
        onLoadedData={handleLoadedData}
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
        onEnded={() => setPlay(false)}
      />
    </div>
  );
};

export default Player;
