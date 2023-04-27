import React from 'react'
import "./GetItem.css"

 const GetItem =({title,description,url,urlToImage}) =>{
  return (
    <div className= "itemcontainer">
      <div className= "getitem">
           <img className ="news-img" src ={urlToImage} alt = {urlToImage} />
           <h3><a href ={url}>{title}</a></h3>
           <p>{description}<a href={url}> View More</a></p>
      </div>
    </div>
  )
}

export default GetItem