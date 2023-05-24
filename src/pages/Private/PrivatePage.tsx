import { Navigate, Route } from "react-router-dom"
import { PrivateRoutes } from "../../models"
import { RoutesWithNotFound } from "../../utilities"
import { lazy } from "react"

const DashboardPage = lazy(() => import('./Dashboard/DashboardPage'))
const HomePage = lazy(() => import('./Home/HomePage'))


function PrivatePage() {
    return (
        <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
            <Route path={PrivateRoutes.DASHBOARD} element={<DashboardPage />} />
            <Route path={PrivateRoutes.HOME} element={<HomePage />} />
        </RoutesWithNotFound>
    )
}
export default PrivatePage