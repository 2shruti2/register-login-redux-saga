
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute =  () => {

console.log("Inside Guard")
const isLoggedin = useSelector((state) => state.rootReducer.userData.isLoggedin)
if (!isLoggedin) {    
    console.log("token not present")
    return <Navigate to="/" />
  }
  return <Outlet />
}

export default ProtectedRoute
