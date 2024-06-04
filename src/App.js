import {useEffect, useState} from "react";
import Header from "./components/Layout/Header";
import Foods from "./components/Foods/Foods";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import RegisterPage from "./components/Login/RegisterPage";
import LoginPage from "./components/Login/LoginPage";
import OrderDataPage from "./components/Login/OrderDataPage";
import MemberData from "./components/Login/MemberData";

const items1 = [
  {
    label: '查看訂單紀錄',
    key: '2',
  },
  {
    label: '會員資料',
    key: '3'
  },{
    label: '登出',
    key: '4'
  },
];
const items2 = [
  {
    label: '登入',
    key: '1',
  },
  {
    label: '敬請期待',
    key: '100',
    disabled: 'true'
  },
];

function App() {
  const [cartIsShown,setCartIsShown] = useState(false);
  const [loginIsShown,setLoginIsShown] = useState(false);
  const [registerIsShown,setRegisterIsShown] = useState(false);
  const [orderPageIsShown,setOrderPageIsShown] = useState(false);
  const [memberDataIsShown,setMemberDataIsShown] = useState(false);
  const [account, setAccount] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const checkToGo = ((ob) => {
    if(ob.key === '1'){
      showLoginHandler();
    }else if(ob.key === '2'){
      showOrderPageHandler();
    }else if(ob.key === '3'){
      showMemberHandler();
    }else if(ob.key === '4'){
      setIsLogin(false)
    }
  })
  
  const handleLoginStatusChange = (status) => {
    setIsLogin(status)
  }
  
  const storeAccount = (account) => {
    setAccount(account)
  }
  
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  const hideLoginHandler = () => {
    setLoginIsShown(false);
  }

  const showLoginHandler = () => {
    setLoginIsShown(true);
  }

  const showRegisterHandler = () => {
    setRegisterIsShown(true);
    hideLoginHandler();
  };

  const hideRegisterHandler = () => {
    setRegisterIsShown(false);
  }

  const showOrderPageHandler = () => {
    setOrderPageIsShown(true);
  }

  const hideOrderPageHandler = () => {
    setOrderPageIsShown(false);
  }

  const showMemberHandler = () => {
    setMemberDataIsShown(true);
  };

  const hideMemberHandler = () => {
    setMemberDataIsShown(false);
  }

  const [userData, setUserData] = useState({
    id: 0,
    account: '',
    password: '',
    phone: ''
  });

  useEffect(() => {
    if (account) {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:5258/Auth/userData?account=${account}`);
        if (!response.ok) {
          throw new Error('GG');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }}, [account]);
  
  return (
    <CartProvider>
      {/* 如果cartIsShown是true則顯示購物車，反之則否 */}
      { cartIsShown && <Cart closing={hideCartHandler} onClose={hideCartHandler} userId={userData.id}/>}
      { loginIsShown && <LoginPage closing={hideLoginHandler} onClose={hideLoginHandler} clickRegister={showRegisterHandler} onLoginStatusChange={handleLoginStatusChange} accountDataSet={storeAccount}/>}
      { registerIsShown && <RegisterPage closing={hideRegisterHandler} onClose={hideRegisterHandler}  onLoginStatusChange={handleLoginStatusChange} accountDataSet={storeAccount}/>}
      { orderPageIsShown && <OrderDataPage closing={hideOrderPageHandler} onClose={hideOrderPageHandler} userId={userData.id}/>}
      { memberDataIsShown && <MemberData closing={hideMemberHandler} onClose={hideMemberHandler} userName={account} phoneNum={userData.phone}/>}
      <Header clickingCart={showCartHandler} clickingBox={(e) => checkToGo(e) } loginStatus={isLogin} userName={account} items={isLogin ? items1 : items2}/>
      <main>
      <Foods />
      </main>
    </CartProvider>
  );
}

export default App;
