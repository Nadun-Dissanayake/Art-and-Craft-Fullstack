import { Link, useParams } from "react-router-dom";
import {format} from "date-fns"
import { useEffect, useState } from "react";

export default function Post({_id, product_name, price, cover, product_description, author, createdAt}){
  
    return(
        <div className='post'>
          <div className='image'>
            <Link to = {`/product/${_id}`}>
              <img src={'http://localhost:4000/' + cover}/>
            </Link>
            
          </div>
          <div className='texts'>
            <Link to = {`/product/${_id}`}><h2>{product_name}</h2></Link>
            <p dangerouslySetInnerHTML={{__html: product_description}}/>
            <div className="Buy-now">
              <div>
                <div><h3>Product Owner: {author.username}</h3></div> 
                <time>Publish Date: {format(new Date(createdAt), 'MMM d yyyy')}</time>
                <div><h1>From ${price}</h1></div> 
              </div>
              <Link to={`/product/${_id}`}><button>Buy Now</button></Link>
            </div>
          </div>   
        </div>
    )
}