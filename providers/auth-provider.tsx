import { useState } from "react"
export interface AuthUser {
  id: number
  email: string
  role: string
  created_at?: string
}

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
