import React, { useState, useEffect, ChangeEvent } from "react";
import { Header } from "../../components/Header";
import { RecentNews } from "../../components/RecentNews";
import { Footer } from "../../components/Footer";
import APIKey from "../../data/api";
import "./style.scss";

import 'dotenv/config'
import { Pagination, Stack } from "@mui/material";
import { Link } from "react-router-dom";
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
  
export const Container = () => {
  const [news, setNews] = useState<ResponseData[]>([]);
  
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>();
  
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=game&from=2022-08-23&to=2022-08-23&sortBy=popularity&apiKey=${APIKey}`
      )
    .then(response => {
      setNews(response.data.articles)
    })
    .catch(err => console.log(err))
  }, [page]);
  
  const Btn = () => {
      console.log('test')
  }
  
  const paginate = (event: ChangeEvent<HTMLInputElement>, value: number) => {
    setPage(value);
    
    window.scrollTo({ top: 1600, behavior: 'smooth' });
  };
  
  const imageError = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNHowX2RIOXDQtQ6EWW7zJ_RC8xhiSsXNihA&usqp=CAU";
  
  return (
    <>
      <Header/>
      <div className="Container">
        <div className="News">
          {news.map((OneNews) => (
            <div className="OneNews">
              <h2 className="Title">{OneNews.title}</h2>
              <img className="Image" src={OneNews.urlToImage} alt={OneNews.title} />
              <p>{OneNews.description}</p>
            </div>
          ))}
        <button onClick={Btn}>
          click
        </button>
        <Stack className="Pagination" sx={{ mt: { lg: '114px', xs: '70px' } }} >
          <Pagination
            shape="rounded"
            defaultPage={page}
            count={totalPage}
            onChange={paginate}
          />
        </Stack>
        </div>
        <RecentNews />
      </div>
      <Footer/>
    </>
  );
};