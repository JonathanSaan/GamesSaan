import React, { useState, useEffect } from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { RecentNews } from "../../components/RecentNews";
//import { Pagination } from "../../components/Pagination";
import { Footer } from "../../components/Footer";
import APIKey from "../../data/api";
import { Home, News, DivOneNews, Title, Image, Paragraph } from "./styles";


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
  
export const Container = () => {
  const [news, setNews] = useState<ResponseData[]>([]);
  
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<any>();
  
  
  useEffect(() => {
    window.scrollTo(0, 0);
    const load = async () => {
      fetch(
        `https://api.newscatcherapi.com/v2/search?q=gaming&lang=en&sort_by=relevancy&page=${page}`,
        {
          headers: {
            "x-api-key": `${APIKey}`,
          },
        }
      )
      .then((response) => response.json())
      .then((result) => { 
        console.log(result)
        setNews(result.articles.slice(0, 15));
        setTotalPage(result.total_pages);
      })
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
                  <Skeleton 
                    count={2}
                    style={{
                      height: "1.5em"
                    }}
                  />
                  <Skeleton
                    style={{
                      margin: "2em 0",
                      minHeight: "11em",
                      height: "30vw",
                      maxHeight: "30em",
                      width: "100%",
                    }}
                  />
                  <Skeleton count={7} />
                </DivOneNews>
              ))}
            </>
          )}
          
          {news && (
            <>
              {news.map((OneNews) => (
                <DivOneNews>
                  <Title href={OneNews.link}>
                    {OneNews.title}
                  </Title>
                  {OneNews.media ? (
                    <a href={OneNews.link}>
                      <Image src={OneNews.media} alt={OneNews.title} />
                    </a>
                    )
                      :
                    (
                    <Image src={imageError} alt="imageError" />
                  )}
                  <Paragraph>
                    {OneNews.summary}
                    <a href={OneNews.link}>
                       Read more
                    </a>
                  </Paragraph>
                </DivOneNews>
              ))}
            </>
          )}
          
          
        </News>
        <RecentNews />
      </Home>
      <Footer/>
    </>
  );
};
          //<Pagination page={page} totalPage={totalPage} paginate={paginate} />