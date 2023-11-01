import { useState,useEffect } from "react";
import BlogList from "./BlogList";
import Loading from "./Loading";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
         setBlogs(data);
         setIsPending(false);
      });
    }, 1000);
  }, []);

  return (
    <div className="home">
      { isPending && <Loading />}
      {blogs && <BlogList blogs={blogs}/>}
    </div>
  );
}

export default Home;
