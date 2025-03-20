import { UserContext } from "../contexts/UserContext";
import { useState } from "react";


export default function UserProvider({
    children,
}) {
    const [authData, setAuthData] = useState({});
    
    const userLoginHandler = (resultData) => {
        setAuthData(resultData);
    }

    return (
        <UserContext.Provider value={{...authData, userLoginHandler}}>
            {children}
        </UserContext.Provider>
    );
}