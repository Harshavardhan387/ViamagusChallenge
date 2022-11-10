import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./Videopage.css";
// import ReactTooltip from "react-tooltip";
import "bootstrap/dist/css/bootstrap.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

function VideoPage() {
  const [url, setUrl] = useState("https://www.youtube.com/watch?v=MDLn5-zSQQI");
  //   const [isShown, setIsShown] = useState(true);

  const urlDetails = [
    {
      url: "https://www.youtube.com/watch?v=MDLn5-zSQQI",
      tooltip: "Lear HTML course",
    },
    {
      url: "https://www.youtube.com/watch?v=J5KxiOnIrKg",
      tooltip: "Lear CSS course",
    },
    {
      url: "https://www.youtube.com/watch?v=BH5xaVsh96w",
      tooltip: "Lear Bootstrap for ReactJS",
    },
    {
      url: "https://www.youtube.com/watch?v=Xoz31I1FuiY",
      tooltip: "Lear MaterialUI",
    },
    {
      url: "https://www.youtube.com/watch?v=ubnpGkSHZ-0",
      tooltip: "Lear ReactJS Course",
    },
    {
      url: "https://www.youtube.com/watch?v=dkbz0xuxjrk",
      tooltip: "Lear ReactJS Libraries",
    },
    {
      url: "https://www.youtube.com/watch?v=lNsnWkO9lZ8",
      tooltip: "Lear ReactJS Components life cycle",
    },
    {
      url: "https://www.youtube.com/watch?v=UITLlBhWZPk",
      tooltip: "Lear ReactJS Developer course",
    },
    {
      url: "https://www.youtube.com/watch?v=mr75zNOGFP8",
      tooltip: "Lear ReactJS states and props",
    },
    {
      url: "https://www.youtube.com/watch?v=kIgboyKEEyc",
      tooltip: "ReactJS tutorial for beginners",
    },
    {
      url: "https://www.youtube.com/watch?v=Xki9uDDgiFk",
      tooltip: "React redux tutorial for beginners",
    },
    {
      url: "https://www.youtube.com/watch?v=o5hPD4R6rTE",
      tooltip: "React with redux tutorial for beginners",
    },
    {
      url: "https://www.youtube.com/watch?v=DYtYyFOfpBY&t=29s",
      tooltip: "React redux for beginners",
    },
    {
      url: "https://www.youtube.com/watch?v=CVpUuw9XSjY",
      tooltip: "Redux for beginners",
    },
    {
      url: "https://www.youtube.com/watch?v=qA6oyQQTJ3I",
      tooltip: "Redux Thunk for beginners",
    },
    {
      url: "https://www.youtube.com/watch?v=SA47gYlL2oQ",
      tooltip: "Redux Mileware for beginners",
    },
  ];
  return (
    <div className="main">
      <div className="mainVideo ">
        <div className="videoPlayer ">
          <ReactPlayer controls url={url} />
        </div>
        <div className="circles">
          <div className="circle1">
            {urlDetails.map((url, index) => (
              <Tippy content={url.tooltip} key={index}>
                <button
                  className="basicCircle"
                  onClick={() => setUrl(url.url)}
                ></button>
              </Tippy>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPage;
