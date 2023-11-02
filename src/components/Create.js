import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added')
      setIsPending(false);
    })
  }

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
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

        { !isPending && <button>Add Blog</button>}
        { isPending && <button disabled>Adding Blog</button>}

      </form>
    </div>

  );
}

export default Create;
