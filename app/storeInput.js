import { create } from "zustand";

const useInputStore = create(set => ({
    input: '',
    setInput: item => set(state => ({
        input: item
    }))
}))

export default useInputStore;