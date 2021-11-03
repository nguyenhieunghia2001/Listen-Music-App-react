import React, { useContext, useState } from "react";
import { SingContext } from "../../context/SingContext";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

function SongLike({ song }) {
  const dispatch = useDispatch();
  const songLikeList = useSelector((state) => state.songs);

  const {  addLike, removeLike } = useContext(SingContext);
  const [isLike, setIsLike] = useState(
    songLikeList?.map((item) => item.id).indexOf(song.id) > -1 ? true : false
  );

  const toggle = () => {
    !isLike ? addLike(song) : removeLike(song);
    setIsLike(!isLike);
  };
  // console.log(t);
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
