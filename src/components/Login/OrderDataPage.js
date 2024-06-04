import classes from "./OrderDataPage.module.css";
import Modal from "../UI/Modal";
import {Descriptions, Divider, List} from 'antd';
import {useEffect, useState} from "react";

function formatAPITime(apiTime) {
    // 將字符串轉換為Date對象
    var apiDate = new Date(apiTime);

    // 定義所需的格式
    var options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };

    // 格式化日期
    var formattedTime = apiDate.toLocaleString('en-US', options).replace(/\//g, '-').replace(/,/g, '');

    return formattedTime;
}
const OrderData = (props) => {
    const [orderList, setOrderList] = useState([]);

    useEffect( () => {
        const getOrders = async () => {
        try {
            const response = await fetch(`http://localhost:5258/Order/GetOrderData?Id=${props.userId}`);
            if (!response.ok) {
                throw new Error('Could not fetch meals data!');
            }
            const data = await response.json();
            const formattedData = data.map(order => ({
                ...order,
                orderTime: "2024/06/03 19:00"
            }));
            setOrderList(formattedData);
        } catch (error) {
            console.error(error);
        }
    };

        getOrders();
}, []);

    const renderOrderDescriptions = (order) => {
        const items = Object.entries(order).map(([key, value]) => ({
            key,
            label: key,
            children: value,
        }));
        return <Descriptions bordered size='default' items={items} />;
    };
    return(
        <Modal onClose={props.onClose}>
            <Divider orientation="left">訂單紀錄</Divider>
            <div className={classes.scrollableContainer}>
                <List
                    dataSource={orderList}
                    renderItem={order => (
                        <List.Item>
                            {renderOrderDescriptions(order)}
                        </List.Item>
                    )}
                />
            </div>
                <div className={classes.actions}>
                    <button className={classes['button--alt']} onClick={props.closing}>關閉</button>
                </div>
        </Modal>
);
}

export default OrderData;