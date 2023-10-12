import { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const App = () => {
  const [searchTxt, setSearchTxt] = useState("");

  const handleSearchTxtChange = (txt) => setSearchTxt(txt);

  return (
    <div className="app">
      <Header handleSearchTxtChange={handleSearchTxtChange} />
      <ListingsContainer searchTxt={searchTxt} />
    </div>
  );
};

export default App;
