import Modal from "../UI/Modal";
import classes from "./RegisterPage.module.css";
import {ConfigProvider, Flex, Input, message, Space} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {useState} from "react"; 
const RegisterPage = (props) => {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const handleRegister = async () => {
        const newUser = {
            account: account,
            password: password,
            phone: phone
        };

        try {
            const response = await fetch('http://localhost:5258/Auth/Register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            if (!response.ok) {
                throw new Error('註冊失敗');
            }

            // 注册成功，显示成功提示
            message.success('註冊成功！');
            props.onLoginStatusChange(true)
            props.accountDataSet(account)
            props.closing(); // 关闭注册页面
        } catch (error) {
            // 注册失败，显示错误提示
            message.error('註冊失敗，請稍後再試！');
            console.error(error);
        }
    };
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
                    <Input placeholder="請輸入帳號" prefix={<UserOutlined/>} className={classes.inputs} onChange={(e) => setAccount(e.target.value)}/>
                    <Input.Password placeholder="輸入密碼" className={classes.inputs} onChange={(e) => setPassword(e.target.value)}/>
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
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </Space.Compact>
                </Flex>
                <div className={classes.actions}>
                    <button className={classes['button--alt']} onClick={props.closing}>關閉</button>
                    <button className={classes.button} onClick={handleRegister}>註冊</button>
                </div>
            </ConfigProvider>
        </Modal>
    )
}

export default RegisterPage;