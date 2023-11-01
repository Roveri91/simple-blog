import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form>
        <label>Tilte:</label>
        <input
          type="text"
          required
          placeholder="Type your blog title"
          value = {title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Body:</label>
        <textarea
          required
          placeholder="Write yuor blog"
          value = {body}
          onChange={(e) => setBody(e.target.value)}
        >
        </textarea>

        <label>Author:</label>
        <input
          type="text"
          required
          placeholder="Your Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button>Add Blog</button>
        <p>{ author }</p>

      </form>
    </div>

  );
}

export default Create;
