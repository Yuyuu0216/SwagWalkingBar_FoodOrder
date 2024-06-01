import { useContext } from 'react';

import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import { InputNumber,Flex } from 'antd';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;//確保有兩個小數點位
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item,amount : 1});
    };

    const cartItems = (
        // 用[]包起來是因為class的名稱內有DASH(-)符號
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem key={item.id} name={item.name} amount = {item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)} />
            ))}
        </ul>
    );

    return(
        <Modal onClose={props.onClose}>
            <Flex vertical="false">
                <h5>桌號</h5>
                <InputNumber min={1} max={10}/>
            </Flex>
            {cartItems}
            <div className={classes.total}>
                <span>總金額</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.closing}>關閉</button>
                {hasItems && <button className={classes.button}>點餐</button>}
            </div>
        </Modal>
    );
};

export default Cart;