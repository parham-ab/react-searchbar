import React, { useState } from "react";

const Searchbar = ({ data }) => {
  const [inputVal, setInputVal] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // filterHandle
  const filterHandle = (e) => {
    setInputVal(e.target.value);
    const filteredItems = data.filter((item) => {
      return item.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    console.log(filteredItems);

    inputVal === "" ? setFilteredData([]) : setFilteredData(filteredItems);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={inputVal}
        onChange={filterHandle}
      />
    </div>
  );
};

export default Searchbar;
