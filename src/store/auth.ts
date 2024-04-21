import { create } from 'zustand'

type Auth = {
    token: boolean
    setToken: () => void
    removeToken: () => void
}


const tokenExists = create<Auth>((set) => ({
  token: false,
  setToken: () => set({ token: true }),
  removeToken: () => set({ token: false }),
}))

export default tokenExists