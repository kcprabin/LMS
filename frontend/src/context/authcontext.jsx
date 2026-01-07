import React, { createContext, useState, useEffect } from 'react'



export const AuthContext = createContext();

 function Authcontext  ({children}) {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setIsLoading(false);
    }, []);
    
    const login = (userData) => {
        setUser(userData)
        localStorage.setItem('user', JSON.stringify(userData));
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    }
    
  //   const logout = async () => {
  //   await axios.post(
  //     "http://localhost:8000/api/v1/library/logout",
  //     {},
  //     { withCredentials: true } // important to send cookies
  //   );
  //   setUser(null);
  //   navigate("/login");
  // };
    
    return (
        <AuthContext.Provider value={{user, login, logout, isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}
export default Authcontext

  

 