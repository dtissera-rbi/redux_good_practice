import { useSelector } from "react-redux";

function Home() {
  const token = useSelector((state) => state.token);

  console.log("token", token);

  return <h1>Home</h1>;
}

export default Home;
