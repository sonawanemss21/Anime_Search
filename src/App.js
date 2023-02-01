import { Fragment, useState } from "react";
import AnimeDisplay from "./components/AnimeDisplay";
import SearchBox from "./components/SearchBox";

function App() {
  const [searchString, setSearchString] = useState("");

  const searchChangeHandler = (searchString) => {
    setSearchString(searchString);
  };

  return (
    <Fragment>
      <SearchBox searchChange={searchChangeHandler} />
      <AnimeDisplay searchString={searchString}/>
    </Fragment>
  );
}

export default App;
