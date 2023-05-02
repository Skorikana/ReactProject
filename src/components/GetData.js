import {useEffect ,useState} from 'react';
import GetItem from "./GetItem"
export default function Getdata({props}){
     const apiKey =process.env.REACT_APP_APIKEY ;
    
     const [news, setNews] = useState([]);
  
     const getNews = async () => {    //fetchdata
       try{
    const response = await fetch (`https://newsapi.org/v2/top-headlines?country=us&category=${props}&apiKey=${apiKey}`) //&page=2&pageSize=10`);
    const result = await response.json();
    console.log(result.articles)
    setNews(result.articles)        //we are setting the data fetched to be displayed on the page homescreen          
      }
   catch(e){
    console.error(e)
   }}
    useEffect(() => {
    getNews();
       }, [props]);
    return(
      <div className ="newsdisplay">
        {news.map(article => {
          return (
              <div className = "container my-5">
              <div className ="row text-center">
                <div className ="col">
             <GetItem
             title       ={article.title}
             description ={article.description} 
             author      ={article.author}
             url         ={article.url}
             publishedAt ={article.publishedAt}
             urlToImage  ={article.urlToImage}/>
             </div>
             </div>
             </div>
             )
        })}
     </div>
   )}
  
