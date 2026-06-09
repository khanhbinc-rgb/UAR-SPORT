import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Thêm sản phẩm
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // Xóa sản phẩm
  const removeFromCart = (index) => {
    setCart((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);