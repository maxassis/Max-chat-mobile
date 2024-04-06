import { create } from 'zustand'

type User = {
    user: {
        name: string
        id: string
        status: "AGUARDANDO" | "ABERTO" | "EM ATENDIMENTO" | "RESOLVIDO" | "FECHADO" | null 
    }
    setUser: (name: string, id: string, status: "AGUARDANDO" | "ABERTO" | "EM ATENDIMENTO" | "RESOLVIDO" | "FECHADO" | null) => void
}

const userInfo = create<User>((set) => ({
  user: {name: "", id: "", status: null },
  setUser: (name, id, status) => set({ user: {name, id, status} }),
}))

export default userInfo