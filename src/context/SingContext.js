import React, { useState } from "react";

export const SingContext = React.createContext();

const SingProvider = ({ children }) => {
  const [currentSingState, setCurrentSingState] = useState({});
  const [songLikeState, setSongLikeState] = useState([]);

  const changeCurrentSing = function (sing) {
    setCurrentSingState({ sing });
  };

  const addLike = (song) => {
    setSongLikeState([...songLikeState, song]);
  };
  const removeLike = async (song) => {
    console.log("remove", song);
    const index = songLikeState.map((item) => item.id).indexOf(song.id);
    if (index < 0) return;
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
};
export default SingProvider;
