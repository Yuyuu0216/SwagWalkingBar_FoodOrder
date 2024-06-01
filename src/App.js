import { useState } from "react";
import Header from "./components/Layout/Header";
import Foods from "./components/Foods/Foods";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import RegisterPage from "./components/Login/RegisterPage";
import LoginPage from "./components/Login/LoginPage";

const items1 = [
  {
    label: '登出',
    key: '3',
  },
  {
    label: '敬請期待',
    key: '2',
    disabled: 'true'
  },
];
const items2 = [
  {
    label: '登入',
    key: '1',
  },
  {
    label: '敬請期待',
    key: '2',
    disabled: 'true'
  },
];

function App() {
  const [cartIsShown,setCartIsShown] = useState(false);
  const [loginIsShown,setLoginIsShown] = useState(false);
  const [registerIsShown,setRegisterIsShown] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const userName = 'Queeeen'

  const checkToGo = ((ob) => {
    if(ob.key === '1'){
      showLoginHandler();
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

  return (
    <CartProvider>
      {/* 如果cartIsShown是true則顯示購物車，反之則否 */}
      { cartIsShown && <Cart closing={hideCartHandler} onClose={hideCartHandler}/>}
      { loginIsShown && <LoginPage closing={hideLoginHandler} onClose={hideLoginHandler} clickRegister={showRegisterHandler}/>}
      { registerIsShown && <RegisterPage closing={hideRegisterHandler} onClose={hideRegisterHandler}/>}
      <Header clickingCart={showCartHandler} clickingBox={(e) => checkToGo(e) } loginStatus={isLogin} userName={userName} items={isLogin ? items1 : items2}/>
      <main>
      <Foods />
      </main>
    </CartProvider>
  );
}

export default App;
