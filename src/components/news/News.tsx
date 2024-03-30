import axios from "axios";
import React, { useEffect, useState } from "react";
import "./news.css";
import nx from "./nx.json";

const style = {
  // position: "absolute",
  // top: 0,
  // left: 0,
  // width: "100%",
  background: "rgba(21, 19, 19, 0.8)",
  // height: "100%",
  zIndex: 1,
};

const News = () => {
  const [news, setNews] = useState(null);
  useEffect(() => {
    if (!news) getNews();
  });

  function getNews() {
    // let { data } = await axios.get(
    //   "https://newsapi.org/v2/top-headlines?country=us&apiKey=9ba6128bd8714491beaab21129351b9f"
    // );
    const data: any = nx.articles;
    const index = (Math.random() * (data.length - 1 - 0) + 0).toFixed(0);
    setNews(data[index]);
    console.log("Welcome");
  }

  return (
    <div>
      <div
        className="news-container"
        style={{
          //@ts-ignore
          backgroundImage: `url(${news?.urlToImage})`,
        }}
      >
        {/* @ts-ignore */}
        <h3 style={style}>{news?.title}</h3>
      </div>
    </div>
  );
};

export default News;
