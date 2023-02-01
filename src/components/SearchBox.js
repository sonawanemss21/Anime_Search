import { useContext } from "react";
import { searchContext } from "../store/Search-Context";
import classes from "../components/SearchBox.module.css";

const SearchBox = (props) => {
  const searchCtx = useContext(searchContext);
  const searchChangeHandler = (event) => {
    props.searchChange(event.target.value);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Search Anime Characters</h1>
      <input
        className={classes.searchBar}
        type="text"
        placeholder="Enter search character"
        onChange={searchChangeHandler}
      ></input>
      <p className={classes.result}>
        Total <strong>{searchCtx.resultCount}</strong> matching characters found
      </p>
    </div>
  );
};

export default SearchBox;
