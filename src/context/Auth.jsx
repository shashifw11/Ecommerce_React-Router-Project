import {createContext,useState} from "react" ; 

export const AuthContext = createContext() ; 


export const AuthContextProvider = ({children})=>{
      const [isAuth , setAuth] = useState(false)
      
    return <AuthContext.Provider value = {{isAuth}}>{children}</AuthContext.Provider>
}