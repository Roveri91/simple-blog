import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  // const blogs = props.blogs;
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <Link to={`/blogs/${blog.id}`} className="blog-link">
          <div className="blog-preview" key={blog.id}>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BlogList;
