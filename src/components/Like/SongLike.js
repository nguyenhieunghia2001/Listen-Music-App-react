import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../features/setting/favoriteSlice";

function SongLike({ song }) {
  const dispatch = useDispatch();
  const songLikeList = useSelector((state) => state.favorite.songs);

  const [isLike, setIsLike] = useState(
    songLikeList?.map((item) => item.id).indexOf(song.id) > -1 ? true : false
  );
  const toggle = () => {
    !isLike ? dispatch(addFavorite(song)) : dispatch(removeFavorite(song));
    setIsLike(!isLike);
  };
  return (
    <div onClick={toggle}>
      {isLike ? (
        <AiFillHeart className="icon__font-md" />
      ) : (
        <AiOutlineHeart className="icon__font-md" />
      )}
    </div>
  );
}
export default SongLike;
