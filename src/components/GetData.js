import {useEffect ,useState} from 'react';
import GetItem from "./GetItem"


export default function Getdata({props}){
      //let apiKey =process.env.APIKEY ;
    
     const [news, setNews] = useState([]);
  
     const getNews = async () => {    //fetchdata
       try{
    //  const response = await fetch (`https://newsapi.org/v2/top-headlines?country=us&category=${props}&apiKey=`)
    //  const result = await response.json();
    //  console.log(result.articles)
    //   setNews(result.articles)        //we are setting the data fetched to be displayed on the page homescreen          
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
          return(
            <div className = "container">
             <GetItem
             title       ={article.title}
             description ={article.description} 
             url         ={article.url}
             urlToImage  = {article.urlToImage}/>
             </div>
           )
        })}
     </div>
   )}
  
