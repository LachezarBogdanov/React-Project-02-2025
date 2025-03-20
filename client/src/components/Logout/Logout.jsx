import { Navigate } from "react-router";
import { useLogout } from "../../api/authApi";
import Spinner from "../Spinner/Spinner";


export default function Logout() {
    const { isLoggedOut } = useLogout();

    return isLoggedOut
        ? <Navigate to="/"/>
        : <Spinner />;
}