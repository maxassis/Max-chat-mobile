export interface ChatlistData {
    id: string
    phone_id: string
    account_id: string
    wa_chat_id: string
    name: string
    kind: string
    picture: string | null
    status: "AGUARDANDO" | "ABERTO" | "EM ATENDIMENTO" | "RESOLVIDO" | "FECHADO" | null 
    favorite: boolean
    archived: boolean
    scheduled: boolean
    new_messages: number
    updated: string
    created: string
    last_message: LastMessage
    users_delegated_ids: string[]
    groups_delegated_ids: string[]
    funnel_steps_ids: string[]
    tags: Tag[]
  }
  
  export interface LastMessage {
    text: string | null
    date: string | null
  }
  
  export interface Tag {
    text: string
    color: string
    bg: string
  }
