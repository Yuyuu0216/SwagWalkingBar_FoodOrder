import { useState } from "react";
import Header from "./components/Layout/Header";
import Foods from "./components/Foods/Foods";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import LoginPage from "./components/Login/LoginPage";

function App() {
  const [nowSelected,setNowSelected] = useState('');
  const [cartIsShown,setCartIsShown] = useState(false);
  const [loginIsShown,setLoginIsShown] = useState(false);

  const whereToGo = (e) => {
    if(e == '1'){
      showCartHandler()
    }else if(e == '2'){

    }
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

  return (
    <CartProvider>
      {/* 如果cartIsShown是true則顯示購物車，反之則否 */}
      {cartIsShown && <Cart closing={hideCartHandler} onClose={hideCartHandler}/>}
      {loginIsShown && <LoginPage closing={showLoginHandler} onClose={hideLoginHandler}/>}
      <Header clickingCart={showCartHandler} clickingLogin={whereToGo}/>
      <main>
      <Foods />
      </main>
    </CartProvider>
  );
}

export default App;
