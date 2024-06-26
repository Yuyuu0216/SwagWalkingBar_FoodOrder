import { Fragment } from "react";
import { Col} from 'antd';
import backgroundIMG from "../../assets/店面照片.JPG"
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
import UserBox from "./UserBox";

const Header = (props) => {
    const loginHandler = (e) => {
        
    }

    return <Fragment>
        <header className={classes.header}>
                <Col span={6} ><h1>Swag Walking Bar</h1></Col>
                <Col span={5}></Col>
                <Col span={6}><HeaderCartButton clicking={props.clickingCart}/></Col>
                <Col span={3}></Col>
                <Col span={7}><UserBox clicking={loginHandler}/></Col>
        </header>
        <div className={classes['main-image']}>
            < img src={backgroundIMG} alt='Swag Walking Bar outlook!'/>
        </div>
    </Fragment>
};

export default Header;