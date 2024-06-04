import { UserOutlined } from '@ant-design/icons';
import { Input, ConfigProvider,Flex, Modal } from 'antd';
import Modall from '../UI/Modal';
import classes from "../Login/LoginPage.module.css";
import {useEffect, useState} from "react";

const LoginPage = (props) => {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState(false);
    const success = () => {
        Modal.success({
            content: '登入成功!',
        });
    };

    const error = (msg) => {
        Modal.error({
            title: '登入失敗',
            content: msg,
        });
    };

    const handleLogin = async () => {
        const user = {
            id: 0,
            account: account,
            password: password,
            phone: ''
        };
        const response = await fetch('http://localhost:5258/Auth/isLogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        const data = await response.text()
        console.log(data)
        if(data === "login succeed"){
            success()
            setLoginStatus(true)
            props.closing()
            props.onLoginStatusChange(true)
            props.accountDataSet(account)
        }else if(data === "no user"){
            error("無效帳號，請註冊")
            setLoginStatus(false)
            props.closing()
        }else{
            error("帳號密碼錯誤")
            setLoginStatus(false)
            props.closing()
        }
    };
    
    return(
        <Modall onClose={props.onClose}>
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
                <span>會員登入</span>
            </div>
            <Flex vertical="false" gap="large" align="center">
            <Input placeholder="請輸入帳號" prefix={<UserOutlined/>} className={classes.inputs} onChange={(e) => setAccount(e.target.value)}/>
            <Input.Password placeholder="輸入密碼" className={classes.inputs} onChange={(e) => setPassword(e.target.value)}/>
                <a onClick={props.clickRegister}>沒有帳號？點我註冊一個</a>
            </Flex>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.closing}>關閉</button>
                <button className={classes.button} onClick={handleLogin}>登入</button>
            </div>
            </ConfigProvider>
        </Modall>
        
    );
}

export default LoginPage;