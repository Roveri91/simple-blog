import { useState,useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My first Blog", body: "lorem ipsum...", author: "Simone", id: 1},
    {title: "Coding is Great", body: "lorem ipsum etc...", author: "Mark Zuckerberg", id: 2},
    {title: "React is fun", body: "Even more lorem ipsum ...", author: "Elon Musk", id: 3}
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log('use effect ran');
  }, []);

  return (
    <div className="home">
      <BlogList blogs={blogs} handleDelete={handleDelete}/>
    </div>
  );
}

export default Home;
