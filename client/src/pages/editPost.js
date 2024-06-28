import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Editor from "../editor";

export default function EditPost(){
    const {id} = useParams();
    const [product_name,setProductname] = useState('');
    const [price,setPrice] = useState('');
    const [product_description,setProductdescription] = useState('') ;
    const [files,setFiles] = useState('') ;
    const [cover, setCover] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        fetch('http://localhost:4000/product/' + id).then(response => {
            response.json().then(postInfo => {
                setProductname(postInfo.product_name);
                setProductdescription(postInfo.product_description);
                setPrice(postInfo.price);
            });
        });
    },[]);

    async  function updatePost(ev){
        ev.preventDefault();
        const data = new FormData();
        data.set('product_name', product_name);
        data.set('price', price);
        data.set('product_description', product_description);
        data.set('id', id);
        if(files?.[0]){
            data.set('file', files?.[0]);
        }
        
        const response = await fetch('http://localhost:4000/product' , {
            method: 'PUT',
            body : data,
            credentials : 'include',
        });

        if(response.ok){
            setRedirect(true);
        }
    }

    if(redirect){
        return <Navigate to = {'/service'} />
    }

    return(
        <form onSubmit={updatePost}>
            <div className="product-details">
                <text>Product Name</text>
                <input type="title" placeholder={'Title'} value={product_name} onChange={ ev => setProductname(ev.target.value)}/>

                <text>Price</text>
                <input type="summury" placeholder={'Summury'} value={price} onChange={ev => setPrice(ev.target.value)}/>

                <text>Product Image</text>
                <input type="file" onChange={ev => setFiles(ev.target.files)}/>

                <text>Product Description</text>
                <Editor onChange={setProductdescription} value={product_description}/>
                
                <button>Update Post</button>
            </div> 
        </form>
    )
}