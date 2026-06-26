"use client"
import { useRouter } from "next/dist/client/components/navigation"
import { createContext, useState } from "react"
export interface AuthUser {
  id: number
  email: string
  role: string
  created_at?: string
}

interface AuthContextType {
  user: AuthUser | null
  token: string | null
  loading: boolean
  login: (email: string, password: string) => Promise<any>
  register: (email: string, password: string, role: string) => Promise<any>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user")
      if (storedUser) {
        try {
          return JSON.parse(storedUser)
        } catch (e) {
          console.error("Failed to parse user from localStorage", e)
        }
      }
    }
    return null
  })
}

const [token, setToken] = useState<string | null>(() => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token")
  }
  return null
})
const [loading, setLoading] = useState(false)
const router = useRouter()
