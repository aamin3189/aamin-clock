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
    >
      <label
        style={{
          fontSize: "12px",
          color: "#AD810A",
        }}
      >
        {label}
      </label>
      <span
        style={{
          fontSize: "16px",
          fontWeight: 300,
        }}
      >
        {time}
      </span>
    </div>
  );
};

export default Time;
