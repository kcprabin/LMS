import React, { createContext, useContext, useState } from 'react'

const userContext = createContext()

const Authcontext = ({children}) => {
    const [user, setUser] = useState(null)
    
    const login = (userData) => {
        setUser(userData)
    }
    
    const logout = () => {
        setUser(null)
    }
    
    return (
        <userContext.Provider value={{user, login, logout}}>
            {children}
        </userContext.Provider>
    )
}

export const useAuth = () => useContext(userContext)
export default Authcontext