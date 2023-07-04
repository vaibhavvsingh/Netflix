import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsArrowLeft, BsPlay, BsPause } from "react-icons/bs";
import { useSelector } from "react-redux";

function Watch() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  let video;

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, []);
  useEffect(() => {
    video = document.getElementById("video");
  });

  function handlePlay() {
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="bg-black relative">
      <div className="absolute top-0 left-0 text-white text-2xl flex gap-3 p-2 justify-center items-center z-10 text-shadow">
        <Link to="/">
          <BsArrowLeft />
        </Link>{" "}
        Watch page for id: {id}
      </div>
      <video
        id="video"
        className="w-[100%] h-[100vh] object-contain"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        loop
      ></video>
      <div onClick={handlePlay}>
        {isPlaying ? (
          <BsPause className="absolute bottom-0 left-0 m-5 text-white text-5xl" />
        ) : (
          <BsPlay className="absolute bottom-0 left-0 m-5 text-white text-5xl" />
        )}
      </div>
    </div>
  );
}

export default Watch;
