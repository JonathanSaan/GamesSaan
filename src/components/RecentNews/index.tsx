import React, { useState, useEffect } from "react";

import APIKey from "../../data/api";
import { TheRecentNews, Title, TitleNews } from "./styles";

interface ResponseData {
  author: string;
  authors: string;
  clean_url: string;
  country: string;
  excerpt: string;
  is_opinion: boolean;
  language: string;
  link: string;
  media: string;
  published_date: string;
  published_date_precision: string;
  rank: number;
  rights: string;
  summary: string;
  title: string;
  topic: string;
  twitter_account: string;
  _id: string;
  _score: number;
}

export const RecentNews = () => {
  const [recent, setRecent] = useState<ResponseData[]>([]);
  const load = async () => {
    fetch(
      `https://api.newscatcherapi.com/v2/search?q=gaming&lang=en&sort_by=date&page=1`,
      {
        headers: {
          "x-api-key": `${APIKey}`,
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.articles);
        setRecent(result.articles.slice(0, 5));
      });
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      load();
    }, 1000);
    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <TheRecentNews>
      <Title>Recent News</Title>
      <ul>
        {recent.map((data) => (
          <TitleNews>
            <a href={data.link}>{data.title}</a>
          </TitleNews>
        ))}
      </ul>
    </TheRecentNews>
  );
};