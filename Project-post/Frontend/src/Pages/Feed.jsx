import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
const Feed = () => {
const [Post, setPost] = useState([
//       {
//         id:"1",
//         image:"https://imgs.search.brave.com/SVvRfdN-DeaKIoo3xDyhx7pQBvsmdPA6ydp_5Wu5HVA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vcGhvdG9z/L2hvbWUvaW1hZ2Ut/Z2VuZXJhdG9yLndl/YnA",
//         caption:"Best Scenary"
//     },
// {
//         id:"2",
//         image:"https://imgs.search.brave.com/SVvRfdN-DeaKIoo3xDyhx7pQBvsmdPA6ydp_5Wu5HVA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vcGhvdG9z/L2hvbWUvaW1hZ2Ut/Z2VuZXJhdG9yLndl/YnA",
//         caption:"Best Scenary"
//     }
  ])
    
    
useEffect(() => {
  const fetchs = async () => {
    try {
      const res = await axios.get("http://localhost:3000/post");
      console.log(res.data);
      setPost(res.data.posts)
    } catch (err) {
      console.log("Here error msg",err);
    }
  };

  fetchs();
}, []);


  return (
    <sections>
{Post.length > 0 ? (
  Post.map(post => (
    <div key={post._id} className="Post-card">
      <img src={post.image} alt={post.caption} />
      <p>{post.caption}</p>
    </div>
  ))
) : (
  
  <h1>No Post Found</h1>
)}

    </sections>
  )
}

export default Feed