import { Navigate } from "react-router"
const ProtectedRoute=({children})=>{
const IsLoggedIn=localStorage.getItem("IsloggedIn")
if(IsLoggedIn!=="true"){
    return <Navigate to="/login"/>
}
    return children
}

export default ProtectedRoute