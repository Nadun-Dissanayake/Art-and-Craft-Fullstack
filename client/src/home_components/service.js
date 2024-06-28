import { useEffect, useState } from "react";
import Post from "../post";

export default function Service(){

    // const [searchQuery, setSearchQuery] = useState('');
    // const [searchResults, setSearchResults] = useState([]);

    // const handleSearch = async () => {
    //     try {
    //         const response = await fetch(`/api/products/search?name=${searchQuery}`);
    //         const data = await response.json();
    //         setSearchResults(data);
    //     } catch (error) {
    //         console.error('Error searching products:', error);
    //     }
    // };

    async function service(ev){
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/service',{
            method: 'POST',
        })

    }

    

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/product').then(response => {
            response.json().then(posts =>{
                setPosts(posts);
            });
        });
    },[]);

    

    

    return(
       <section onClick={service}>
            <>
            {/* <input  type="text" placeholder="Search by Product Name" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}></input>
            <button onClick={handleSearch}>Search</button>
            <ul>
                {searchResults.map((product) => (
                    <li key={product._id}>{product.name}</li>
                ))}
            </ul> */}
            {posts.length > 0 && posts.map(post => (
                <Post {...post}/>
            ))}
            </>
       </section>
    )
}