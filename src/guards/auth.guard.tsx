import { useSelector } from "react-redux";
import { AppStore } from "../redux/store";
import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../models";

interface Props {
    privateValidation: boolean
}

export const AuthGuard = ({ privateValidation }: Props) => {

    // Obtener el State del Usuario para saber si esta logeado o no
    const userState = useSelector((store: AppStore) => store.user);

    return userState.name ? (
        privateValidation ? (
            <Outlet />
        ) : (
            <Navigate replace to={PrivateRoutes.PRIVATE} />
        )
    ) : (
        <Navigate replace to={PublicRoutes.LOGIN} />
    )
};

export default AuthGuard;