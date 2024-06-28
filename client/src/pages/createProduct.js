import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { Navigate } from "react-router-dom";
import Editor from "../editor";

export default function CreateProduct(){
    const [product_name,setProductname] = useState('');
    const [price,setPrice] = useState('');
    const [product_description,setProductdescription] = useState('') ;
    const [files,setfiles] = useState('') ;
    const [redirect, setRedirect] = useState(false);

    async function AddNewProduct(ev){
        const data = new FormData();
        data.set('product_name', product_name);
        data.set('price', price);
        data.set('product_description', product_description);
        data.set('file', files[0]);
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/product' , {
            method: 'POST', 
            body: data,
            credentials: 'include',
        });
        if(response.ok){
            setRedirect(true);
        }
    }

    if(redirect)
    {
        return <Navigate to = {'/service'}/>
    }

    return ( 
        <form onSubmit={AddNewProduct}>
            <div className="product-details">
                <text>Product Name</text>
                <input type="title" value={product_name} onChange={ ev => setProductname(ev.target.value)}/>

                <text>Price</text>
                <input type="number" value={price} onChange={ev => setPrice(ev.target.value)}/>

                <text>Product Image</text>
                <input type="file" onChange={ev => setfiles(ev.target.files)}/>

                <text>Product Description</text>
                <Editor onChange={newValue => setProductdescription(newValue)} value={product_description}/>

                <button>Create Post</button>
            </div>
        </form>
    );
}
