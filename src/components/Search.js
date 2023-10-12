import { useState } from "react";

const Search = ({ handleSearchTxtChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchTxtChange(inputValue);
    setInputValue("");
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        name="search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
};

export default Search;
