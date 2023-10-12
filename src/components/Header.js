import Search from "./Search";

const Header = ({ handleSearchTxtChange }) => {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleSearchTxtChange={handleSearchTxtChange} />
    </header>
  );
};

export default Header;
