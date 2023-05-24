import { useDispatch } from "react-redux"
import { getMorty } from "../../services"
import { createUser } from "../../redux/states/user"
import { useNavigate } from "react-router-dom"
import { PrivateRoutes } from "../../models"


function LoginPage() {

    const dispatch = useDispatch()

    // Para navegar entre paginas useNavigate()
    const navigate = useNavigate()

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