import React, { useContext, useEffect, useState } from "react";
import albumImg from "../../images/mixtape.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SingContext } from "../../context/SingContext";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function ({ song }) {
  const { songLikeList, addLike, removeLike } = useContext(SingContext);
  
  const [isLike, setIsLike] = useState(false);

  const toggle = () => setIsLike(!isLike);

  useEffect(() => {
    isLike ? addLike(song) : removeLike(song);
  }, [isLike]);

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
