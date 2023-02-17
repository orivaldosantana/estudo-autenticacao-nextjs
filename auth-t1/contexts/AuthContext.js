import { createContext } from "react";
import {setCookie} from 'nookies'
import { http } from '@/utils/http'

export const AuthContext = createContext({})

export function AuthProvider({ children }){
   const isAuthenticated = false; 

   async function signIn({email,passowrd}) {

      http.post('/auth/signin', {email,passowrd}).then(res => {
         const userRes  = res.data;
         console.log(userRes)
         const token = 'xxxx' 
         setCookie(undefined,'nextautht1.token',token, { 
            maxAge: 60*30*1, //30 min
         })
       })

   }
   return (
      <AuthContext.Provider value={{ isAuthenticated }} >
         {children}
      </AuthContext.Provider>
   )
}