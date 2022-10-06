import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import "./Video.css";

const Video = () => {
  const navigate = useNavigate();
  const [secondClassName, setSecondClassName] = useState("disabled");
  const [firstClassName, setFirstClassName] = useState("enabled");
  const [mutedClass, setMutedClass] = useState(false);
  const [guerrilla, setGuerrilla] = useState(true);
  const [paused, setPaused] = useState(true);

  const [currentVideo, setCurrentVideo] = useState(0);
  const [videos, setVideos] = useState([
    {
      one: require("../videos/Guerrillero-1.m4v"),
      two: require("../videos/Nino-1.m4v"),
    },
  ]);

  const videoRef = useRef(null);
  const videoRef2 = useRef(null);

  useEffect(() => {
    videoRef.current.muted = false;
    videoRef2.current.muted = true;
  }, []);

  const playVideo = () => {
    if (videoRef.current?.paused) {
      videoRef.current?.play();
      videoRef2.current?.play();
      setPaused(false);
    } else {
      videoRef.current?.pause();
      videoRef2.current?.pause();
      setPaused(true);
    }
  };

  const changeVideo = () => {
    setMutedClass(false);
    if (firstClassName === "enabled") {
      videoRef.current.muted = true;
      videoRef2.current.muted = false;
      setGuerrilla(false);
      setFirstClassName("disabled");
      setSecondClassName("enabled");
    } else {
      videoRef.current.muted = false;
      videoRef2.current.muted = true;
      setFirstClassName("enabled");
      setGuerrilla(true);
      setSecondClassName("disabled");
    }
  };

  const muteVideo = () => {
    if (firstClassName === "enabled") {
      if (videoRef.current.muted) {
        videoRef.current.muted = false;
        videoRef2.current.muted = true;
        setMutedClass(false);
      } else {
        videoRef.current.muted = true;
        videoRef2.current.muted = true;
        setMutedClass(true);
      }
    } else {
      if (videoRef2.current.muted) {
        videoRef2.current.muted = false;
        setMutedClass(false);
        videoRef.current.muted = true;
      } else {
        videoRef2.current.muted = true;
        setMutedClass(true);
        videoRef.current.muted = true;
      }
    }
  };

  return (
    <div className="videoWrapper">
      <div className="social-media">
        <FacebookShareButton
          url="https://www.youtube.com/watch?v=2BnTYEafRQc&ab_channel=FullstackTechies"
          quote={
            "Hola acabo de conocer lo que pasa en el informe de la verdad de colombia"
          }
          hashtag="#informedeLaVerdad"
        >
          <FacebookIcon
            style={{ width: "40px", height: "40px", color: "white" }}
            round={true}
          ></FacebookIcon>
        </FacebookShareButton>
        <WhatsappShareButton
          url="https://www.youtube.com/watch?v=2BnTYEafRQc&ab_channel=FullstackTechies"
          title="Hola acabo de conocer lo que pasa en el informe de la verdad de colombia"
          separator=":: "
        >
          <WhatsappIcon
            style={{
              width: "40px",
              height: "40px",
              color: "white",
              marginLeft: "10px",
            }}
            round={true}
          ></WhatsappIcon>
        </WhatsappShareButton>
      </div>
      <p className="titulo-video">¿La verdad cabe en un informe?</p>
      <button className="playButton" onClick={playVideo}>
        <img
          style={{ width: "55px" }}
          src={
            paused
              ? require("../Images/play.png")
              : require("../Images/pause.png")
          }
          alt=""
        />
      </button>
      <button className="eyeButton" onClick={changeVideo}>
        <img
          style={{ width: "80px" }}
          src={
            guerrilla
              ? require("../Images/guerrillero.png")
              : require("../Images/niños.png")
          }
          alt=""
        />
      </button>
      <button className="muteButton" onClick={muteVideo}>
        <img
          style={{ width: "50px", height: "50px" }}
          src={
            mutedClass
              ? require("../Images/volume-mute.png")
              : require("../Images/volume.png")
          }
        />
      </button>
      <video
        className={firstClassName}
        ref={videoRef}
        crossOrigin="anonymous"
        controls={false}
        src={videos[currentVideo].one}
        type="video/mp4"
        onEnded={() => console.log("termino el primer video")}
      />
      <video
        onEnded={() => navigate("/final")}
        className={secondClassName}
        ref={videoRef2}
        crossOrigin="anonymous"
        controls={false}
        src={videos[currentVideo].two}
        type="video/mp4"
      />
    </div>
  );
};

export default Video;
