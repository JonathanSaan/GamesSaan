import React, { useState, useEffect } from "react";

import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
//import { Link } from "react-router-dom";

import { RecentNews } from "../../components/RecentNews";
import { Pagination } from "../../components/Pagination";
import { Footer } from "../../components/Footer";
import APIKey from "../../data/api";
import { Home, News, DivOneNews, Title, Image, Paragraph } from "./styles";


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
      console.log(response)
      setNews(response.data.articles.slice(0, 15));
      setTotalPage(response.data.totalResults);
    };
    load();
  }, [page]);
  
  const paginate = (value: number) => {
    setPage(value);
    
    window.scrollTo({ top: 1600, behavior: "smooth" });
  };
  
  const imageError: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXrkW7AqjOtp0k2zxOtF8hcWtF57v-UlyjSw&usqp=CAU";
  
  return (
    <>
      <Home>
        <News>
          {news.length === 0 && (
            <>
              {Array(15).fill(1).map((card, index) => (
                <DivOneNews>
                  <Skeleton count={1} />
                   <Skeleton className={Image} height={250} />
                  <Skeleton count={7} />
                </DivOneNews>
              ))}
            </>
          )}
          
          {news && (
            <>
              {news.map((OneNews) => (
                <DivOneNews>
                  <Title>{OneNews.title}</Title>
                  {OneNews.urlToImage ? (
                    <Image src={OneNews.urlToImage} alt={OneNews.title} />
                    )
                      :
                    (
                    <Image src={imageError} alt="imageError" />
                  )}
                  <Paragraph>{OneNews.description}</Paragraph>
                </DivOneNews>
              ))}
            </>
          )}
          
          <Pagination page={page} totalPage={totalPage} paginate={paginate} />
          
          
        </News>
        <RecentNews />
      </Home>
      <Footer/>
    </>
  );
};