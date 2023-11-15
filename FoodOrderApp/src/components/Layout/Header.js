import { Fragment } from "react";
import backgroundIMG from "../../assets/店面照片.JPG"
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {

    return <Fragment>
        <header className={classes.header}>
            <h1>Swag Walking Bar</h1>
            <HeaderCartButton clicking={props.clicking}/>
        </header>
        <div className={classes['main-image']}>
            < img src={backgroundIMG} alt='Swag Walking Bar outlook!'/>
        </div>
    </Fragment>
};

export default Header;