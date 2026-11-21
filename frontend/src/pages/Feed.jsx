import React, { useState ,useEffect} from 'react'
import axios, { Axios } from 'axios'

const Feed = () => {
 const [posts,setPosts] = useState([
    {
    _id : "1",
    image:"asdfasfd",
    caption:"Beautiful scenery"

 }]
);


useEffect(()=>{
 axios.get("http://localhost:3000/posts")
 .then((res)=>{
    console.log(res.data);
    setPosts(res.data.post)
 })
},
[])

 

  return (
   <section className='feed-section'>
    {
        posts.length > 0 ? (
            posts.map((post)=>(
                <div key={post._id} className='post-card'>
                    <img src={post.image} alt={post.caption} />
                    <p>{post.caption }</p>
                </div>
            ))
        ) : (
            <h1> no post available</h1>
        )
    }
   </section>
  )
}

export default Feed
