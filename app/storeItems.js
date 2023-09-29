import { create } from "zustand";

const useStripeStore = create(set => ({
    stripeItems: [],
    setStripeItems: items => set(state => ({
        stripeItems: [...state.stripeItems, items]
    }))
}))

export default useStripeStore;
