import React from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"

// export default function PrivateRoute({ component: Component, ...rest }) {
//   const { currentUser } = useAuth()

//   return (
//     <Route
//       {...rest}
//       render={props => {
//         return currentUser ? <Component {...props} /> : <Navigate to="/login" />
//       }}
//     ></Route>
//   )
// }

export default function PrivateRoute({ children }) {
  
  const { currentUser } = useAuth()
  // const history = useNavigate()

  return currentUser ? children : <Navigate to="/login" />;
}