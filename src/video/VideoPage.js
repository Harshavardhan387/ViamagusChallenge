import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./Videopage.css";
// import ReactTooltip from "react-tooltip";
import "bootstrap/dist/css/bootstrap.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

function VideoPage() {
  const [visible, setVisible] = useState({ visibility: "hidden" });
  const [url, setUrl] = useState("https://www.youtube.com/watch?v=MDLn5-zSQQI");
  //   const [isShown, setIsShown] = useState(true);

  const urlDetails = [
    {
      id: 1,
      url: "https://www.youtube.com/watch?v=MDLn5-zSQQI",
      tooltip: "Lear HTML course",
    },
    {
      id: 2,
      url: "https://www.youtube.com/watch?v=J5KxiOnIrKg",
      tooltip: "Lear CSS course",
    },
    {
      id: 3,
      url: "https://www.youtube.com/watch?v=BH5xaVsh96w",
      tooltip: "Lear Bootstrap for ReactJS",
    },
    {
      id: 4,
      url: "https://www.youtube.com/watch?v=Xoz31I1FuiY",
      tooltip: "Lear MaterialUI",
    },
    {
      id: 5,
      url: "https://www.youtube.com/watch?v=ubnpGkSHZ-0",
      tooltip: "Lear ReactJS Course",
    },
    {
      id: 6,
      url: "https://www.youtube.com/watch?v=dkbz0xuxjrk",
      tooltip: "Lear ReactJS Libraries",
    },
    {
      id: 7,
      url: "https://www.youtube.com/watch?v=lNsnWkO9lZ8",
      tooltip: "Lear ReactJS Components life cycle",
    },
    {
      id: 8,
      url: "https://www.youtube.com/watch?v=UITLlBhWZPk",
      tooltip: "Lear ReactJS Developer course",
    },
    {
      id: 9,
      url: "https://www.youtube.com/watch?v=mr75zNOGFP8",
      tooltip: "Lear ReactJS states and props",
    },
    {
      id: 10,
      url: "https://www.youtube.com/watch?v=kIgboyKEEyc",
      tooltip: "ReactJS tutorial for beginners",
    },
    {
      id: 11,
      url: "https://www.youtube.com/watch?v=Xki9uDDgiFk",
      tooltip: "React redux tutorial for beginners",
    },
    {
      id: 12,
      url: "https://www.youtube.com/watch?v=o5hPD4R6rTE",
      tooltip: "React with redux tutorial for beginners",
    },
    {
      id: 13,
      url: "https://www.youtube.com/watch?v=DYtYyFOfpBY&t=29s",
      tooltip: "React redux for beginners",
    },
    {
      id: 14,
      url: "https://www.youtube.com/watch?v=CVpUuw9XSjY",
      tooltip: "Redux for beginners",
    },
    {
      id: 15,
      url: "https://www.youtube.com/watch?v=qA6oyQQTJ3I",
      tooltip: "Redux Thunk for beginners",
    },
    {
      id: 16,
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
          <div
            className="circle1"
            onMouseEnter={(e) => {
              setVisible({ visibility: "visible" });
            }}
            onMouseLeave={(e) => {
              setVisible({ visibility: "hidden" });
            }}
          >
            {urlDetails.map((url, index) => (
              <Tippy content={url.tooltip} key={index}>
                <button
                  style={visible}
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
