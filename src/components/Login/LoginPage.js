import { UserOutlined } from '@ant-design/icons';
import { Input, ConfigProvider,Flex } from 'antd';
import Modal from '../UI/Modal';
import classes from "../Login/LoginPage.module.css";

const LoginPage = (props) => {
    return(
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
                <span>會員登入</span>
            </div>
            <Flex vertical="false" gap="large" align="center">
            <Input placeholder="請輸入帳號" prefix={<UserOutlined/>} className={classes.inputs}/>
            <Input.Password placeholder="輸入密碼" className={classes.inputs}/>
                <a onClick={props.clickRegister}>沒有帳號？點我註冊一個</a>
            </Flex>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.closing}>關閉</button>
                <button className={classes.button}>登入</button>
            </div>
            </ConfigProvider>
        </Modal>
        
    );
}

export default LoginPage;