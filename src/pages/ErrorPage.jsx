import { NavLink, useRouteError } from "react-router-dom"


export const ErrorPage = () => {
    const error=useRouteError();
    console.log(error);
  return (
    <div>
   <h1>OOPS! Error Occurred.</h1>
   {error && <p>{error.data}</p>}
   <NavLink to='/'>
   <button>Go Home</button>
   </NavLink>
   </div>
  )
}