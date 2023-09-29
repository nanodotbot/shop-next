import { create } from "zustand";

const useCategoryStore = create(set => ({
    category: '',
    setCategory: item => set(state => ({
        category: item
    }))
}))

export default useCategoryStore;