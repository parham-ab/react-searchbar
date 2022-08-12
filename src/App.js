import { useEffect, useState } from "react";
import axios from "axios";
// components
import Searchbar from "./components/Searchbar";

const App = () => {
  const [mainData, setMainData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      setMainData(response.data);
    };
    fetchData();
  }, []);

  return <Searchbar data={mainData} />;
};

export default App;