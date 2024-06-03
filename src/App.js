import { useState } from "react";
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
  const [isLogin, setIsLogin] = useState(true);
  const userName = 'Queeeen'
  const phoneNum = '0988888888'

  const checkToGo = ((ob) => {
    if(ob.key === '1'){
      showLoginHandler();
    }else if(ob.key === '2'){
      showOrderPageHandler();
    }else if(ob.key === '3'){
      showMemberHandler();
    }
  })
  
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
  
  return (
    <CartProvider>
      {/* 如果cartIsShown是true則顯示購物車，反之則否 */}
      { cartIsShown && <Cart closing={hideCartHandler} onClose={hideCartHandler}/>}
      { loginIsShown && <LoginPage closing={hideLoginHandler} onClose={hideLoginHandler} clickRegister={showRegisterHandler}/>}
      { registerIsShown && <RegisterPage closing={hideRegisterHandler} onClose={hideRegisterHandler}/>}
      { orderPageIsShown && <OrderDataPage closing={hideOrderPageHandler} onClose={hideOrderPageHandler}/>}
      { memberDataIsShown && <MemberData closing={hideMemberHandler} onClose={hideMemberHandler} userName={userName} phoneNum={phoneNum}/>}
      <Header clickingCart={showCartHandler} clickingBox={(e) => checkToGo(e) } loginStatus={isLogin} userName={userName} items={isLogin ? items1 : items2}/>
      <main>
      <Foods />
      </main>
    </CartProvider>
  );
}

export default App;
