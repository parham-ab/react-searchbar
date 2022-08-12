import { useState } from "react";
import Results from "./Results";

const Searchbar = ({ data }) => {
  const [inputVal, setInputVal] = useState(" ");
  const [filteredData, setFilteredData] = useState([]);
  // filterHandle
  const filterHandle = (e) => {
    setInputVal(e.target.value);
    const filteredItems = data.filter((item) => {
      return item.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    inputVal === "" ? setFilteredData([]) : setFilteredData(filteredItems);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={inputVal}
        onChange={filterHandle}
        onBlur={() => setFilteredData([])}
      />
      {filteredData.length !== 0 &&
        filteredData
          .slice(0, 10)
          .map((item) => <Results result={item} key={item.id} />)}
    </div>
  );
};

export default Searchbar;
