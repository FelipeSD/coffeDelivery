import { createContext, useContext, useEffect, useState } from "react";
import { toNumber } from "../Utils";

interface CartItemProps {
  id: number;
  name: string;
  image: string;
  quantity: number;
  price: string;
}

interface CartProviderProps {
  children: React.ReactNode;
}

interface CartContextProps {
  cart: CartItemProps[];
  total: number;
  addToCart: (coffee: CartItemProps) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext({} as CartContextProps);

export default function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItemProps[]>([]);
  const [total, setTotal] = useState<number>(0);

  function addToCart(coffee: CartItemProps) {
    // check if item already exists in cart
    const itemIndex = cart.findIndex(item => item.id === coffee.id);
    if (itemIndex !== -1) {
      // update quantity
      const newCart = [...cart];
      newCart[itemIndex].quantity = coffee.quantity;
      setCart(newCart);
    } else {
      // add item to cart
      setCart([...cart, coffee]);
    }
  }

  function removeFromCart(id: number) {
    const itemIndex = cart.findIndex(item => item.id === id);

    if (itemIndex !== -1) {
      const newCart = [...cart];
      newCart.splice(itemIndex, 1);
      setCart(newCart);
    }
  }

  function clearCart() {
    setCart([]);
  }

  useEffect(() => {
    // get cart from local storage
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCart(JSON.parse(cart));
    }
  }, []);

  useEffect(() => {
    // calculate total
    const total = cart.reduce((acc, item) => {
      console.log(item);
      return acc + toNumber(item.price) * item.quantity;
    }, 0);
    setTotal(total);

    // save cart to local storage
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{
      cart,
      total,
      addToCart,
      removeFromCart,
      clearCart,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext);
}