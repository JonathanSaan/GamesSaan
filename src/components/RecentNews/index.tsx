import React, { useState, useEffect } from "react";
import APIKey from "../../data/api";
import "./style.scss";
import axios from "axios";

interface ResponseData {
  author: string;
  content: string;
  description: string;
  publishedAt: Date;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

export const RecentNews = () => {
  const [recent, setRecent] = useState<ResponseData[]>([]);
  
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=game&from=2022-08-23&to=2022-08-23&sortBy=popularity&apiKey=${APIKey}`
      )
    .then(response => {
      console.log(response.data)
      setRecent(response.data.articles)
    })
    .catch(err => console.log(err))
  }, []);
  
  return (
    <div className="RecentNews">
      <h1 className="Title">
        Recent News
      </h1>
    </div>
  )
}