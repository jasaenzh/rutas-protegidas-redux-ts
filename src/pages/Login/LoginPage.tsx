import { useDispatch } from "react-redux"
import { getMorty } from "../../services"
import { UserKey, createUser, resetUser } from "../../redux/states/user"
import { useNavigate } from "react-router-dom"
import { PrivateRoutes, PublicRoutes } from "../../models"
import { clearLocalStorage } from "../../utilities"
import { useEffect } from "react"


function LoginPage() {

    const dispatch = useDispatch()

    // Para navegar entre paginas useNavigate()
    const navigate = useNavigate()

    useEffect(() => {
        clearLocalStorage(UserKey);
        dispatch(resetUser())
        navigate(`/${PublicRoutes.LOGIN}`, { replace: true })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const login = async () => {
        try {
            const result = await getMorty()
            dispatch(createUser(result))
            // Navegar a la ruta privada /dashboard
            navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true })
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div>
            <h2>Hola este es el Login</h2>
            <button onClick={login}>Login</button>
        </div>
    )
}

export default LoginPage