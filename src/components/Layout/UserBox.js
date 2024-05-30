import {  Avatar,Flex} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Button,Dropdown, Space} from 'antd';
import classes from "./UserBox.module.css";

const items = [
    {
      label: '登入',
      key: '1',
    },
    {
      label: '設定',
      key: '2',
    },
  ];

const userName = 'Queeeen'
const UserBox = (props) => {

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
            <h1>{userName}</h1>
            <Avatar
            style={{
            backgroundColor: '#f56a00',
            verticalAlign: 'middle',
            }}
            size="large"
        >
            {userName.charAt(0)}
            </Avatar>
        </Flex>
    );
}

export default UserBox;