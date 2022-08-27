import React, { useState, useEffect } from "react";
import axios from "axios";

import APIKey from "../../data/api";
import { TheRecentNews, Title, TitleNews } from "./styles";

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
    window.scrollTo(0, 0);
    const load = async () => {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=game&from=2022-08-26&to=2022-08-26&sortBy=popularity&apiKey=${APIKey}`);
      setRecent(response.data.articles.slice(0, 5));
      console.log(recent)
    };
    load();
  }, []);
  
  return (
    <TheRecentNews>
      <Title>
        Recent News
      </Title>
      <ul>
        {recent.map((data) => (
          <TitleNews>
            <a href={data.url}>{data.title}</a>
          </TitleNews>
        ))}
      </ul>
    </TheRecentNews>
  );
};