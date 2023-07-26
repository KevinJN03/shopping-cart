import "./App.css";
import Body from "./Components/Body";
import Layout from "./Components/Layout";
import { createContext, useEffect, useState } from "react";
import product from "./Components/Shop/product";
export const CartContext = createContext();
const App = () => {
 
  
  const [allProduct, setAllProduct] = useState(product);

  useEffect(()=> {
    console.log("mount");
  }, [])


  const [cart, setCart] = useState([allProduct[0], allProduct[1]]);
  function updateItem(id, amount) {
    console.log(id);
    console.log("amount:", amount);

    const update = cart.map((product) => {
      if (product.id == id) {
        return { ...product, quantity: amount };
      } else {
        return product;
      }
    });

    console.log(update);

    setCart(update);
  }
  function removeItem(id) {
    const updatedCart = cart.filter((product) => product.id !== id);
    console.log("updatedCart: ", updatedCart);
    return setCart(updatedCart);
  }

  function addToBasket(item) {
    const itemIndex = cart.findIndex((product) => product.id === item.id);

    if (itemIndex !== -1) {
      // Item with the provided ID already exists, update the quantity
      const updatedCart = cart.map((product) =>
        product.id === item.id
          ? { ...product, quantity: item.quantity }
          : product
      );
      setCart(updatedCart);
    } else {
      // Item with the provided ID does not exist, add it to the cart
      setCart([...cart, item]);
    }
  }

  return (
    <CartContext.Provider value={{ cart, allProduct }}>
      <Layout
        component={
          <Body
            addToBasket={addToBasket}
            removeItem={removeItem}
            updateItem={updateItem}
          />
        }
      ></Layout>
    </CartContext.Provider>
  );
};

export default App;
