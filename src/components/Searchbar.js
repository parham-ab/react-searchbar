import { useRef, useState } from "react";
// components
import Results from "./Results";

const Searchbar = ({ data }) => {
  const [inputVal, setInputVal] = useState(" ");
  const [filteredData, setFilteredData] = useState([]);
  const newInputVal = useRef();
  // filterHandle
  const filterHandle = (e) => {
    setInputVal(e.target.value);
    const filteredItems = data.filter((item) => {
      return item.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    newInputVal.current.value.length === 0
      ? setFilteredData([])
      : setFilteredData(filteredItems);
  };

  return (
    <div className="searchbar-container">
      <input
        type="search"
        placeholder="Search..."
        ref={newInputVal}
        onChange={filterHandle}
        style={{
          borderRadius: filteredData.length ? "10px 10px 0 0" : "10px",
        }}
        onBlur={() => setFilteredData([])}
      />
      <div
        className={filteredData.length !== 0 ? `results-container` : undefined}
      >
        {filteredData.length !== 0 &&
          filteredData
            .slice(0, 13)
            .map((item) => <Results result={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default Searchbar;