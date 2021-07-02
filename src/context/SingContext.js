import React, { useState } from "react";

export const SingContext = React.createContext();

export default function ({ children }) {
  const [currentSingState, setCurrentSingState] = useState({});
  const [songLikeState, setSongLikeState] = useState([]);

  const changeCurrentSing = function (sing) {
    setCurrentSingState({ sing });
  };

  const addLike = (song) => {
    setSongLikeState([...songLikeState, song]);
  };
  const removeLike = async (song) => {
    const index = songLikeState.map((item) => item.id).indexOf(song.id);
    if (index < 1) return;
    const arrNew = [
      ...songLikeState.slice(0, index),
      ...songLikeState.slice(index + 1, songLikeState.length),
    ];
    setSongLikeState(arrNew);
  };

  return (
    <SingContext.Provider
      value={{
        currentSing: currentSingState,
        changeSing: changeCurrentSing,
        addLike,
        removeLike,
        songLikeList: songLikeState,
      }}
    >
      {children}
    </SingContext.Provider>
  );
}
