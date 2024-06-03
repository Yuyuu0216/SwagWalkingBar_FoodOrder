import Modal from "../UI/Modal";
import classes from "./MemberData.module.css";
import {ConfigProvider, Flex, Input} from "antd";
import {UserOutlined} from "@ant-design/icons";
const MemberData = (props) => {
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
                    <span>會員資料</span>
                </div>
                <Flex vertical="false" gap="large" align="center">
                    <Input value={props.userName} prefix={<UserOutlined/>} className={classes.inputs} disabled/>
                    <Input.Password value='aabbccdd' placeholder="輸入密碼" className={classes.inputs} disabled/>
                    <Input value={props.phoneNum} prefix={<UserOutlined/>} className={classes.inputs} disabled/>
                </Flex>
                <div className={classes.actions}>
                    <button className={classes['button--alt']} onClick={props.closing}>關閉</button>
                </div>
            </ConfigProvider>
        </Modal>
    )
}

export default MemberData;