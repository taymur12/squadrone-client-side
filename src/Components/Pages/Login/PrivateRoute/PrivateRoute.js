import { CircularProgress } from "@mui/material";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

function PrivateRoute({ children, ...rest }) {
    const {user, isLoading} = useAuth()
    if(isLoading){return <CircularProgress sx={{margin:'0 auto', display:'block' }} />}
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

export default PrivateRoute;