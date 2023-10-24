import { useState } from "react";

const Home = () => {

  const [name, setName] = useState("Mario");
  const [age, setAge] = useState(25);

  const ButtonClick = () => {
    setName('Luigi');
    setAge(30);
  }


  return (
    <div className="home">
      <h2>homepage</h2>
      <p>{ name } is  { age } years old</p>
      <button onClick={ButtonClick}>Click Me</button>
    </div>
  );
}

export default Home;
