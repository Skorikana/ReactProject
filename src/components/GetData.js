import {useEffect ,useState} from 'react';


export default function Getdata(){
     
     const [news, setNews] = useState(null);

      const getNews = async () => {
      const response = await fetch();
      const data = await response.json();
      console.log(data);
             
   }
    useEffect(() => {
   getNews();
       }, []);
    
    return(
      <div><h1>NEWS ON A ROLL</h1></div>
    )
    }  
