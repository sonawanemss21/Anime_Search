import classes from "../UI/PageNotFound.module.css";

const PageNotFound = () => {
    return <div className={classes.emptyPage}>
        <p className={classes.message}>No results found !!</p>
    </div>
}

export default PageNotFound;