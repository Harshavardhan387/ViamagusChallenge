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
      tooltip: "https://img.youtube.com/vi/MDLn5-zSQQI/hqdefault.jpg",
    },
    {
      id: 2,
      url: "https://www.youtube.com/watch?v=J5KxiOnIrKg",
      tooltip: "https://img.youtube.com/vi/J5KxiOnIrKg/hqdefault.jpg",
    },
    {
      id: 3,
      url: "https://www.youtube.com/watch?v=BH5xaVsh96w",
      tooltip: "https://img.youtube.com/vi/BH5xaVsh96w/hqdefault.jpg",
    },
    {
      id: 4,
      url: "https://www.youtube.com/watch?v=Xoz31I1FuiY",
      tooltip: "https://img.youtube.com/vi/Xoz31I1FuiY/hqdefault.jpg",
    },
    {
      id: 5,
      url: "https://www.youtube.com/watch?v=ubnpGkSHZ-0",
      tooltip: "https://img.youtube.com/vi/ubnpGkSHZ-0/hqdefault.jpg",
    },
    {
      id: 6,
      url: "https://www.youtube.com/watch?v=dkbz0xuxjrk",
      tooltip: "https://img.youtube.com/vi/dkbz0xuxjrk/hqdefault.jpg",
    },
    {
      id: 7,
      url: "https://www.youtube.com/watch?v=lNsnWkO9lZ8",
      tooltip: "https://img.youtube.com/vi/lNsnWkO9lZ8/hqdefault.jpg",
    },
    {
      id: 8,
      url: "https://www.youtube.com/watch?v=UITLlBhWZPk",
      tooltip: "https://img.youtube.com/vi/UITLlBhWZPk/hqdefault.jpg",
    },
    {
      id: 9,
      url: "https://www.youtube.com/watch?v=mr75zNOGFP8",
      tooltip: "https://img.youtube.com/vi/mr75zNOGFP8/hqdefault.jpg",
    },
    {
      id: 10,
      url: "https://www.youtube.com/watch?v=kIgboyKEEyc",
      tooltip: "https://img.youtube.com/vi/kIgboyKEEyc/hqdefault.jpg",
    },
    {
      id: 11,
      url: "https://www.youtube.com/watch?v=Xki9uDDgiFk",
      tooltip: "https://img.youtube.com/vi/Xki9uDDgiFk/hqdefault.jpg",
    },
    {
      id: 12,
      url: "https://www.youtube.com/watch?v=o5hPD4R6rTE",
      tooltip: "https://img.youtube.com/vi/o5hPD4R6rTE/hqdefault.jpg",
    },
    {
      id: 13,
      url: "https://www.youtube.com/watch?v=DYtYyFOfpBY&t=29s",
      tooltip: "https://img.youtube.com/vi/DYtYyFOfpBY/hqdefault.jpg",
    },
    {
      id: 14,
      url: "https://www.youtube.com/watch?v=CVpUuw9XSjY",
      tooltip: "https://img.youtube.com/vi/CVpUuw9XSjY/hqdefault.jpg",
    },
    {
      id: 15,
      url: "https://www.youtube.com/watch?v=qA6oyQQTJ3I",
      tooltip: "https://img.youtube.com/vi/qA6oyQQTJ3I/hqdefault.jpg",
    },
    {
      id: 16,
      url: "https://www.youtube.com/watch?v=SA47gYlL2oQ",
      tooltip: "https://img.youtube.com/vi/SA47gYlL2oQ/hqdefault.jpg",
    },
  ];
  return (
    <div className="main">
      <div className="mainVideo ">
        <div className="videoPlayer ">
          <ReactPlayer controls url={url} className="reactPlayer">
            <div className="circles">
              <div
                className="circle1"
                onMouseEnter={() => {
                  setVisible({ visibility: "visible" });
                }}
                onMouseLeave={() => {
                  setVisible({ visibility: "hidden" });
                }}
              >
                {urlDetails.map((url) => (
                  <Tippy
                    content={
                      <span>
                        <img
                          className="thumbnailImage"
                          src={url.tooltip}
                          alt="thumbnail"
                        ></img>
                      </span>
                    }
                    key={url.id}
                  >
                    <button
                      style={visible}
                      className="basicCircle"
                      onClick={() => setUrl(url.url)}
                    ></button>
                  </Tippy>
                ))}
              </div>
            </div>
          </ReactPlayer>
          <div className="circles">
            <div
              className="circle1"
              onMouseEnter={() => {
                setVisible({ visibility: "visible" });
              }}
              onMouseLeave={() => {
                setVisible({ visibility: "hidden" });
              }}
            >
              {urlDetails.map((url) => (
                <Tippy
                  content={
                    <span>
                      <img
                        className="thumbnailImage"
                        src={url.tooltip}
                        alt="thumbnail"
                      ></img>
                    </span>
                  }
                  key={url.id}
                >
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
    </div>
  );
}

export default VideoPage;
