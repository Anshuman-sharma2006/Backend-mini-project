// const handelsubmit = async (e) => {
//   e.preventDefault();

//   const formData = new FormData(e.target);

// axios.post("http://localhost:3000/create-post",formData).then((res)=>console.log(res)
// ).catch((err) => {
//   console.log(err);
  
  //not production ready code it is try and catch is best way
// })


// }
import { useNavigate } from "react-router-dom";
import axios from "axios"
const CreatePost = () => {
  const navigate = useNavigate(); 
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
      
    const formData = new FormData(e.target);

    const res = await axios.post(
      "http://localhost:3000/create-post",
      formData
    );
    navigate("/feed");

    console.log(res.data);
    // Optional: show success message
  } catch (error) {
    console.error("Error creating post:", error.response?.data || error.message);
  }
};

  return (
 <section className="Crate-post-Seaction">
 <h1>Create Post</h1>
 <form onSubmit={handleSubmit}>
    <input type="file" name="Image" accept='image/*' />
    <input type="text" name="caption" placeholder='Enter Caption...' required />
    <button type="Submit">Submit</button>
 </form>

 </section>
  )
}

export default CreatePost