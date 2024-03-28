import React from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext();

export default function AuthContextProvider({children}){
    const [user, setUser] = React.useState('');
    const [invalidCredentials, setInvalidCredentials] = React.useState('');

    const navigate = useNavigate();

    const login = async (input) => {
        try {
            const response = await fetch("http://localhost:8080/user/login", {
              method: "POST",
              headers: { "Content-Type": "application/json"},
              body: JSON.stringify(input),
            });
            const res = await response.json();
            if (res.user) {
              setUser(res.user);
              localStorage.setItem("user", JSON.stringify(res.user));
              navigate('/');
              return;
            }
             throw new Error(res.message);
          } catch (err) {
            console.error(err);
            setInvalidCredentials('Invalid credentials.');
          }
      }

    const logout = () => {
        localStorage.clear();
        setUser('');
        navigate('/');
    }

    return(
        <AuthContext.Provider value={{user, login, logout, invalidCredentials}}>
            {children}
        </AuthContext.Provider>
    );

}

export const useAuth = () => {
    return React.useContext(AuthContext);
};