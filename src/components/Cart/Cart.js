import {useContext, useState} from 'react';

import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import {InputNumber, Flex, message} from 'antd';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const [tableNumber, setTableNumber] = useState(0);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const handleOrderSubmit = async () => {
        if (tableNumber === 0) {
            message.error('請填寫桌號！');
            return;
        }else if(!props.userId){
            message.error('請先登入！');
            return;
        }

        const orderItems = cartCtx.items.map(item => {
            return {
                productId: item.id,
                quantity: item.amount
            };
        });

        const orderData = {
            userId: props.userId,
            tableNumber: tableNumber,
            orderItems: orderItems
        };

        try {
            const response = await fetch('http://localhost:5258/Order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            if (!response.ok) {
                throw new Error('訂單提交失敗');
            }

            message.success('訂單提交成功！');
            props.closing(); // 關閉購物車頁面
        } catch (error) {
            message.error('訂單提交失敗，請稍後再試！');
            console.error(error);
        }
    };

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)} />
            ))}
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            <Flex vertical="false">
                <h5>桌號</h5>
                <InputNumber min={1} max={10} onChange={(value) => setTableNumber(value)} required />
            </Flex>
            {cartItems}
            <div className={classes.total}>
                <span>總金額</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.closing}>關閉</button>
                {hasItems && <button className={classes.button} onClick={handleOrderSubmit}>點餐</button>}
            </div>
        </Modal>
    );
};

export default Cart;