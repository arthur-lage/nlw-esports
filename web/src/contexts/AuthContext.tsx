import { createContext, ReactNode, useState } from "react"
import {useEffect} from 'react';
import { api } from "../services/api";
import { useSearchParams } from 'react-router-dom';

type CurrentUser = {
  discordId: number
  discord: string
  token_type: string
  access_token: string
}

type AuthContextType = {
  currentUser: CurrentUser | null
}

export const AuthContext = createContext({} as AuthContextType)

type Props = {
  children: ReactNode
}

export function AuthProvider ({ children } : Props) {
  const [searchParams] = useSearchParams()
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null)

  useEffect(() => {
    const code = searchParams.get("code")

    async function authenticateDiscord() {
      if(code) {
        const res = await api.get<CurrentUser>("/auth/discord?code=" + code)
        
        setCurrentUser(res.data)
      }
    }

    authenticateDiscord()
  }, [])
  
  const value = {
    currentUser,
  }
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}