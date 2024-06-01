import {  Avatar,Flex} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Button,Dropdown, Space} from 'antd';
import classes from "./UserBox.module.css";



const UserBox = (props) => {
    const items = props.items;
    const onClick = ({ key }) => {
        props.clicking({ key });
      };

    return(
        <Flex justify-content='center' align='center' gap='small'>
            <Dropdown menu={{
                items,
                onClick,
            }}
            >
                <Button className={classes.functionButton}>
                    <Space >
                        <DownOutlined />
                    </Space>
                </Button>
            </Dropdown>
            <h1>{props.userName}</h1>
            {
                props.userName !== "" ? <Avatar
                    style={{
                        backgroundColor: '#f56a00',
                        verticalAlign: 'middle',
                    }}
                    size="large"
                >
                    {props.userName.charAt(0)}
                </Avatar> : <h3>會員請先登入</h3>
            }
        </Flex>
    );
}

export default UserBox;