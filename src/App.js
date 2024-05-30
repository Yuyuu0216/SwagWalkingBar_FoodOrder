import { useState } from "react";
import Header from "./components/Layout/Header";
import Foods from "./components/Foods/Foods";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import SettingPage from "./components/Login/SettingPage";
import LoginPage from "./components/Login/LoginPage";

function App() {
  const [cartIsShown,setCartIsShown] = useState(false);
  const [loginIsShown,setLoginIsShown] = useState(false);
  const [settingIsShown,setSettingIsShown] = useState(false);

  const checkToGo = ((ob) => {
    if(ob.key === '1'){
      showLoginHandler();
    }else if(ob.key === '2'){
      showSettingHandler();
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

  const showSettingHandler = () => {
    setSettingIsShown(true);
  };

  const hideSettingHandler = () => {
    setSettingIsShown(false);
  }

  return (
    <CartProvider>
      {/* 如果cartIsShown是true則顯示購物車，反之則否 */}
      { cartIsShown && <Cart closing={hideCartHandler} onClose={hideCartHandler}/>}
      { loginIsShown && <LoginPage closing={hideLoginHandler} onClose={hideLoginHandler}/>}
      { settingIsShown && <SettingPage closing={hideSettingHandler} onClose={hideSettingHandler}/>}
      <Header clickingCart={showCartHandler} clickingBox={(e) => checkToGo(e) }/>
      <main>
      <Foods />
      </main>
    </CartProvider>
  );
}

export default App;
