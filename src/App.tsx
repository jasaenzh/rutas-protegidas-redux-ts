
import './App.css'
import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes, Roles } from './models'
import { AuthGuard, RoleGuard } from './guards'
import { RoutesWithNotFound } from './utilities'
import { Suspense, lazy } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import { Logout } from './components/Logout'
import { DashboardPage } from './pages/Private'

const Login = lazy(() => import('./pages/Login/LoginPage'))
const PrivatePage = lazy(() => import('./pages/Private/PrivatePage'))

function App() {

  return (
    <div>
      <Suspense fallback={<div>Cargando...</div>}>
        <Provider store={store}>
          <BrowserRouter>
            <Logout />
            <RoutesWithNotFound>
              <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route element={<AuthGuard privateValidation={true} />}>
                <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<PrivatePage />} />
              </Route>
              <Route element={<RoleGuard rol={Roles.ADMIN} />}>
                <Route path={PrivateRoutes.DASHBOARD} element={<DashboardPage />} />
              </Route>
            </RoutesWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  )
}

export default App
