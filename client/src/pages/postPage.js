import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {formatISO9075} from "date-fns";
import { UserContext } from "../userContext";

export default function PostPage(){
    const [postInfo , setPostInfo] = useState(null);
    const {userInfo} = useContext(UserContext);
    const {id} = useParams();
    useEffect(() => {
        fetch(`http://localhost:4000/product/${id}`).then(response =>{
            response.json().then(postInfo => {
                setPostInfo(postInfo);
            });
        });
    },[]);

    const handleDelete = () => {
        fetch(`http://localhost:4000/product/${id}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (response.status === 200) {
              alert("Product deleted successfully")
            } else {
              
              console.error("Failed to delete the product");
            }
          })
          .catch((error) => {
            console.error("Failed to delete the product:", error);
          });
      };

    if(!postInfo) return '';

    

    return(
        <div className="show-details">
            <img src={`http://localhost:4000/${postInfo.cover}`}/>
            <div>
              <h1>{postInfo.product_name}</h1>
              <p dangerouslySetInnerHTML={{__html:postInfo.product_description}}/>
              <h3>price : ${postInfo.price}</h3 >
              {userInfo.id == postInfo.author._id && (
                <div className="post-btn">
                    <Link className="edit-btn" to={`/edit/${postInfo._id}`}>Edit Product</Link>
                    <Link className="delete-btn" onClick={handleDelete}>Delete Product</Link> 
                </div>
              )}

              {userInfo.id != postInfo.author._id && (
                <div>
                    <Link className="pay-btn">Pay Now</Link> 
                </div>
              )}
            </div>
                    
            
        </div>
    );
}