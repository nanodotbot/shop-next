import { create } from "zustand";

const useCartStore = create(set => ({
    cartItems: [],
    setCartItems: item => set(state => ({
        cartItems: item
    }))
}))

export default useCartStore;