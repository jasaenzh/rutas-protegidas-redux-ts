import { useNavigate } from "react-router-dom"
import { UserKey } from "../../redux/states/user"
import { clearLocalStorage } from "../../utilities"
import { PublicRoutes } from "../../models"

function Logout() {

    const navigate = useNavigate()

    const logOut = () => {
        clearLocalStorage(UserKey)
        navigate(`${PublicRoutes.LOGIN}`, { replace: true })
    }

    return (
        <button onClick={logOut}>Logout</button>
    )
}
export default Logout