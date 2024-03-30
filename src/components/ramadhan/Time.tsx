import React from "react";

type iProps = {
  label: string;
  time: string;
};

const Time = ({ label, time }: iProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        fontFamily: "Poppins",
        marginRight: 40,
      }}
      className={label.toLowerCase()}
    >
      <label
        style={{
          fontSize: "16px",
          color: "#AD810A",
        }}
      >
        {label}
      </label>
      <span
        style={{
          fontSize: "20px",
          fontWeight: 300,
        }}
      >
        {time}
      </span>
    </div>
  );
};

export default Time;
