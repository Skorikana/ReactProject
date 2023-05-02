import React from 'react'

 const GetItem =({title,description,url,urlToImage,author,publishedAt}) =>{
  return (
    <div className= "container">
    <div className="card" style={{width: "18rem"}}>
    <span className="badge rounded-pill text-bg-success">Trending</span>
    <img src={urlToImage} className="card-img-top" alt= {urlToImage} />
    <div className="card-body">  
    <h6 className="card-title">{title}</h6>
     <p className="card-text">{description}</p>  
     <p className="card-text"><small className="text-body-secondary">On: {publishedAt} </small></p>
    <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown": author} </small></p>
    <a href={url} className="btn btn-primary">View more</a>
    </div>
    </div>
    </div> 
  )
}
export default GetItem