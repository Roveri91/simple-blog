import { useState } from "react";

const Home = () => {

  const [name, setName] = useState("mario");

  const ButtonClick = () => {
    setName('Luigi')
  }


  return (
    <div className="home">
      <h2>homepage</h2>
      <p>{ name }</p>
      <button onClick={ButtonClick}>Click Me</button>
    </div>
  );
}

export default Home;
