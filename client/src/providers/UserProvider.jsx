import { UserContext } from "../contexts/UserContext";
import usePersistedState from "../hooks/usePersistedState";


export default function UserProvider({
    children,
}) {
    const [authData, setAuthData] = usePersistedState('auth', {});
    
    const userLoginHandler = (resultData) => {
        setAuthData(resultData);
    }

    return (
        <UserContext.Provider value={{...authData, userLoginHandler}}>
            {children}
        </UserContext.Provider>
    );
}