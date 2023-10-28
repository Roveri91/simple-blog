import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My first Blog", body: "lorem ipsum...", author: "Simone", id: 1},
    {title: "Coding is Great", body: "lorem ipsum etc...", author: "Mark Zuckerberg", id: 2},
    {title: "React is fun", body: "Even more lorem ipsum ...", author: "Elon Musk", id: 3}
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs}/>
    </div>
  );
}

export default Home;
