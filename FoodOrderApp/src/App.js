import { useState } from "react";
import Header from "./components/Layout/Header";
import Foods from "./components/Foods/Foods";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown,setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {/* 如果cartIsShown是true則顯示購物車，反之則否 */}
      {cartIsShown && <Cart closing={hideCartHandler} onClose={hideCartHandler}/>}
      <Header clicking={showCartHandler}/>
      <main>
      <Foods />
      </main>
    </CartProvider>
  );
}

export default App;
