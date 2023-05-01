import React from 'react'

 const GetItem =({title,description,url,urlToImage,author}) =>{
  return (
    <div className= "container">
    <div className="card" style={{width: "18rem"}}>
    <img src={urlToImage} className="card-img-top" alt= {urlToImage} />
    <div className="card-body">  
    <h6 class="card-title">{title}</h6>
     <p class="card-text">{description}</p>  
    <p class="card-text"><small class="text-body-secondary">By {!author?"Unknown": author} </small></p>
    <a href={url} className="btn btn-primary">View more</a>
    </div>
    </div>
    </div> 
  )
}
export default GetItem