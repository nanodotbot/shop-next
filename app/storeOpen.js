import { create } from "zustand";

const useOpenStore = create(set => ({
    open: '',
    setOpen: newState => set(state => ({
        open: newState
    }))
}))

export default useOpenStore;