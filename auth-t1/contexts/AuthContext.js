import { createContext, useEffect, useState } from "react"
import { setCookie, parseCookies } from "nookies"
import Router from "next/router"
import { http } from "@/utils/http"

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
   const [user, setUser] = useState({})
   const isAuthenticated = false

   useEffect(() => {
      console.log("Necessário recuperar as informações dos usuários!")
      /* TODOD
      const { "nextautht1.email": userCookie } = parseCookies()
      if (userCookie) {
         console.log("nextautht1.email " + userCookie)
         setUser(userCookie)
      }*/
   }, [])

   async function signIn(email, password) {
      //TODO: realizar tratamento de erros
      const { data } = await http.post("/auth/signin", { email, password })

      console.log("Dados do Usuário: ")
      console.log(data)

      setUser(data.user)

      const token = data.access_token
      setCookie(undefined, "nextautht1.token", token, {
         maxAge: 60 * 90 * 1, //130 min
      })

      Router.push("/dashboard")
   }
   return (
      <AuthContext.Provider value={{ isAuthenticated, signIn, user }}>
         {children}
      </AuthContext.Provider>
   )
}
