import { useState } from "react";

const BlogList = () => {
  const [blogs, setBlogs] = useState([
    { title: "My first Blog", body: "lorem ipsum...", author: "Simone", id: 1},
    {title: "Coding is Great", body: "lorem ipsum etc...", author: "Mark Zuckerberg", id: 2},
    {title: "React is fun", body: "Even more lorem ipsum ...", author: "Elon Musk", id: 3}
  ]);

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
