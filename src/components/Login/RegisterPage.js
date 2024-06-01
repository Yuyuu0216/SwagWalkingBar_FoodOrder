import Modal from "../UI/Modal";
import classes from "./RegisterPage.module.css";
import {ConfigProvider, Flex, Input, Space} from "antd";
import {UserOutlined} from "@ant-design/icons"; 
const RegisterPage = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <ConfigProvider
                theme={{
                    components : {
                        Input: {
                            colorBorder: '#000000',
                        }
                    }
                }}
            >
                <div className={classes.header}>
                    <span>會員註冊</span>
                </div>
                <Flex vertical="false" gap="large" align="center">
                    <Input placeholder="請輸入帳號" prefix={<UserOutlined/>} className={classes.inputs}/>
                    <Input.Password placeholder="輸入密碼" className={classes.inputs}/>
                    <Space.Compact  className={classes.inputs}>
                        <Input
                            style={{
                                width: '20%',
                            }}
                            defaultValue="886"
                        />
                        <Input
                            style={{
                                width: '80%',
                            }}
                            placeholder="請輸入聯絡電話"
                        />
                    </Space.Compact>
                </Flex>
                <div className={classes.actions}>
                    <button className={classes['button--alt']} onClick={props.closing}>關閉</button>
                    <button className={classes.button}>註冊</button>
                </div>
            </ConfigProvider>
        </Modal>
    )
}

export default RegisterPage;