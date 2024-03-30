import moment from "moment";
import React from "react";

//@ts-ignore
const Date = ({ timeDate }) => {
  return (
    <div className="date-comp">
      <span>{moment(timeDate).format("ddd")}</span>
      <span>{moment(timeDate).format("DD")}</span>
    </div>
  );
};

export default Date;
