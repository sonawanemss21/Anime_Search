import classes from "../components/AnimeItem.module.css";
import favouritesIcon from "../assets/favourite.png";

const AnimeItem = (props) => {
  return (
    <div className={classes.container}>
      <img className={classes.image} src={props.image} />
      <div className={classes.innerContainer}>
        <div className={classes.nameField}>
          <p className={classes.name}>{props.name}</p>
          {props.nickName && (
            <p className={classes.nickName}>{props.nickName}</p>
          )}
        </div>
        <div className={classes.favouritesField}>
          <img
            className={classes.favouriteIcon}
            src={favouritesIcon}
            alt="fav icon"
          />
          <span className={classes.favourite}>{props.favorites}</span>
        </div>
      </div>
      <input
        className={classes.button}
        type="button"
        onClick={() => {
          window.open(props.url, "_blank");
        }}
      />
    </div>
  );
};

export default AnimeItem;
