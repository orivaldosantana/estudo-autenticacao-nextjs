import { createContext, useState } from "react"
import { setCookie } from "nookies"
import { http } from "@/utils/http"

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [user, setUser] = useState({})
  const isAuthenticated = false

  async function signIn(email, password) {
    console.log("signIn " + email + " " + password)
    http.post("/auth/signin", { email, password }).then((res) => {
      const userRes = res.data
      console.log(userRes)
      const token = "xxxx"
      setCookie(undefined, "nextautht1.token", token, {
        maxAge: 60 * 30 * 1, //30 min
      })
    })
  }
  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
