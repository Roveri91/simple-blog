const Create = () => {
  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form>
        <label>Tilte:</label>
        <input
          type="text"
          required
          placeholder="Type your blog title"
        />

        <label>Body:</label>
        <textarea required placeholder="Write yuor blog">
        </textarea>

        <label>Author:</label>
        <input
          type="text"
          required
          placeholder="Your Name"
        />

        <button>Add Blog</button>

      </form>
    </div>

  );
}

export default Create;
