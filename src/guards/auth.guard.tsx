import { useSelector } from "react-redux";
import { AppStore } from "../redux/store";
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "../models";


export const AuthGuard = () => {

    // Obtener el State del Usuario para saber si esta logeado o no
    const userState = useSelector((store: AppStore) => store.user);

    return userState.name ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />
};

export default AuthGuard;
