import classes from "./OrderDataPage.module.css";
import Modal from "../UI/Modal";
import {Button, Descriptions, Divider, List, Typography} from 'antd';
import {useEffect, useState} from "react";
const OrderData = (props) => {
    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        // 假设 fetchOrders 是一个从数据库获取所有订单的异步函数
        const fetchOrders = async () => {
            const data = await getOrdersFromDB();
            setOrderList(data);
        };

        fetchOrders();
    }, []);

    const renderOrderDescriptions = (order) => {
        const items = [
            { key: '1', label: '時間', children: order.time },
            { key: '2', label: '總價', children: order.totalPrice },
            { key: '3', label: '處理狀態', children: order.status },
            // 可以根据实际数据增加更多的描述项
        ];
        return <Descriptions bordered size='default' items={items} />;
    };
    
    const getOrdersFromDB = async () => {
        // 模拟从数据库获取多笔订单数据
        // 实际中你可能会使用 fetch 或 axios 来进行 API 调用
        return [
            {
                time: '2024/02/16 19:00',
                totalPrice: '$180',
                status: '等待',
            },
            {
                time: '2024/02/17 14:30',
                totalPrice: '$250',
                status: '完成',
            },
            {
                time: '2024/02/17 14:30',
                totalPrice: '$250',
                status: '進行',
            },
            {
                time: '2024/02/17 14:30',
                totalPrice: '$250',
                status: '待付',
            }
            // 添加更多的订单数据
        ];
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