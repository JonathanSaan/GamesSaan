import React, { useState, useEffect, ChangeEvent } from "react";
import { Header } from "../../components/Header";
import { RecentNews } from "../../components/RecentNews";
import { Pagination } from "../../components/Pagination";
import { Footer } from "../../components/Footer";
import APIKey from "../../data/api";
import "./style.scss";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
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
  const [totalPage, setTotalPage] = useState<any>();
  
  
  useEffect(() => {
    window.scrollTo(0, 0);
    const load = async () => {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=game&from=2022-08-23&to=2022-08-23&sortBy=popularity&apiKey=${APIKey}`);
      setNews(response.data.articles.slice(0, 15))
    };
    load()
  }, [page]);
  
  const Btn = () => {
    if (news.length === 0 ) {
      console.log(news)
      return console.log("nao funciona")
    }
      console.log(news)
      return console.log("funciona")
  }
  
  const paginate = (value: number) => {
    setPage(value);
    
    window.scrollTo({ top: 1600, behavior: "smooth" });
  };
  
  const imageError: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXrkW7AqjOtp0k2zxOtF8hcWtF57v-UlyjSw&usqp=CAU";
  
  return (
    <>
      <Header/>
      <div className="Container">
        <div className="News">
          {news.length === 0 && (
            <>
              {Array(15).fill(1).map((card, index) => (
                <div className="OneNews">
                  <Skeleton count={1} />
                   <Skeleton className="Image" />
                  <Skeleton count={7} />
                </div>
              ))}
            </>
          )}
          
          {news && (
            <>
              {news.map((OneNews) => (
                <div className="OneNews">
                  <h2 className="Title">{OneNews.title}</h2>
                  {OneNews.urlToImage ? (
                    <img className="Image" src={OneNews.urlToImage} alt={OneNews.title} />
                    )
                      :
                    (
                    <img className="Image" src={imageError} alt="imageError" />
                  )}
                  <p>{OneNews.description}</p>
                </div>
              ))}
            </>
          )}
          <button onClick={Btn}>
            click
          </button>
        
        </div>
        <Pagination page={page} totalPage={totalPage} paginate={paginate} />
        <RecentNews />
      </div>
      <Footer/>
    </>
  );
};