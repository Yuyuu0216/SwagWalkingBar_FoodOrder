import { useContext } from 'react';

import classes from './FoodItem.module.css';
import FoodItemForm from './FoodItemForm';
import CartContext from '../../../store/cart-context'

const FoodItem = (props) => {
    const cartCtx = useContext(CartContext);

    //第一個$是字串，第二個${}是JS語法
    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    };

    return(
        //上一層是ul，所以這邊li是合理的
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <FoodItemForm id={props.id} onAddToCart={addToCartHandler}/>
            </div>
        </li>
    );
}

export default FoodItem;