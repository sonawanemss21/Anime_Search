import { Fragment, useState, useEffect, useContext } from "react";
import Pagination from "@mui/material/Pagination";
import Card from "../UI/Card";
import AnimeItem from "./AnimeItem";
import PageNotFound from "../UI/PageNotFound";
import { searchContext } from "../store/Search-Context";
import classes from "../components/AnimeDisplay.module.css";

const pageLimit = 10;
const AnimeDisplay = (props) => {
  let displayJSX = "";
  const searchCtx = useContext(searchContext);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  let searchUrl = "";
  if (props.searchString === "") {
    searchUrl = `https://api.jikan.moe/v4/characters?page=${page}&limit=${pageLimit}&q=&order_by=favorites&sort=desc`;
  } else {
    searchUrl = `https://api.jikan.moe/v4/characters?page=${page}&limit=${pageLimit}&q=${props.searchString}&order_by=favorites&sort=desc`;
  }

  useEffect(() => {
    fetch(searchUrl)
      .then((response) => response.json())
      .then((data) => {
        let count = Math.ceil(data.pagination.items.total / pageLimit);
        setCount(count);
        searchCtx.setResultCount(data.pagination.items.total);
        setData(data.data);
        console.log(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, [searchUrl, searchCtx.setResultCount]);

  if (isLoading) {
    displayJSX = <p className={classes.loading}>Loading please wait...</p>;
  } else if (data.length === 0) {
    displayJSX = <PageNotFound />;
  } else {
    displayJSX = (
      <Card>
        <ul className={classes.list}>
          {data.map((character) => {
            return (
              <li key={character.mal_id}>
                <AnimeItem
                  image={character.images.webp.image_url}
                  name={character.name}
                  favorites={character.favorites}
                  nickName={character.nicknames[0]}
                  url={character.url}
                />
              </li>
            );
          })}
        </ul>
        <div className={classes.pagination}>
          <Pagination
            count={count}
            color="primary"
            defaultPage={1}
            onChange={(event, value) => {
              setPage(value);
            }}
          />
        </div>
      </Card>
    );
  }
  return <Fragment>{displayJSX}</Fragment>;
};

export default AnimeDisplay;
