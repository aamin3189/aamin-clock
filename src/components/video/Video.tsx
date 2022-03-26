import React from "react";

const name = "sunny";

interface myInterface {
  videoSrc: string;
}

const Video = (props: myInterface) => {
  return (
    <div>
      <video autoPlay={true} muted loop id="myVideo">
        <source
          src={require(`../../assets/video/${name}.mp4`)}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Video;
