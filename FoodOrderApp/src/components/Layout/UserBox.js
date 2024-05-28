import {  Avatar,Flex} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space,message } from 'antd';

const items = [
    {
      label: '登入',
      key: '1',
    },
    {
      label: '設定',
      key: '3',
    },
  ];

const userName = 'Queeeen'
const UserBox = (props) => {

    const onClick = ({ key }) => {
        message.info(`Click on item ${key}`);
      };

    return(
        <Flex justify-content='center' align='center' gap='small'>
            <h1>{userName}</h1>
            <Avatar
            style={{
            backgroundColor: '#f56a00',
            verticalAlign: 'middle',
            }}
            size="large"
        >
            {userName}
            </Avatar>
            <Dropdown
            menu={{
            items,
            onClick,
            }}
            >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <DownOutlined />
      </Space>
    </a>
    </Dropdown>

        </Flex>
    );
}

export default UserBox;