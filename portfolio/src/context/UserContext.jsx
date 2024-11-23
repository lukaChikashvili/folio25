import { createContext, useState } from "react";


export const UserContext = createContext();


const UserProvider = ({ children }) => {

   const [darkMode, setDarkMode] = useState(false);

    return (<UserContext.Provider value= {{darkMode, setDarkMode}}>
        {children}
    </UserContext.Provider>)
}


export default UserProvider;
