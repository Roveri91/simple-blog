import { useHistory, useParams } from "react-router-dom";
import Loading from "./Loading";
import useFetch from "../useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();

  const handleClick = () => {
    const confirmation = window.confirm('Are you sure you want delete this blog?')
    if (confirmation){
      fetch('http://localhost:8000/blogs/' + blog.id, {
        method: 'DELETE'
      }).then(() => {
        history.push('/');
      })
    }
  }

  return (
    <div>
      { isPending && <div><Loading /></div> }
      { error && <div>{ error }</div>}
      { blog && (
        <div className="blog-details">
          <article>
            <h2>{ blog.title }</h2>
            <p><i>Written By:</i> { blog.author }</p>
            <div>{ blog.body }</div>
            <button onClick={handleClick}>Delete</button>
          </article>
        </div>
      )}
    </div>
  );
}

export default BlogDetails;
