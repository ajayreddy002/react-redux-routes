import * as React from 'react';
import { Switch, Route, RouteProps, Redirect } from 'react-router-dom';
// import { AuthService } from '../_services/auth.service';
import { DashBoardComponent } from '../components/dashboard/dashboard.component';
import { NotFoundComponet } from '../components/login/notfound.component';
export interface PrivateRouteProps extends RouteProps {
    component: React.ComponentType<any>;
}
 const RoutesModule = () => {
     return(
    <Switch>
        <PrivateRoute path="/" exact component={DashBoardComponent}></PrivateRoute>
        <PrivateRoute path="/dashboard" exact component={DashBoardComponent}></PrivateRoute>
        <PrivateRoute path="*" exact component={NotFoundComponet}></PrivateRoute>
    </Switch>
     )
}
const PrivateRoute = (props: PrivateRouteProps) => {
    const { component: Component, ...rest } = props;

    return (
        <Route
            {...rest}
            render={(routeProps) =>
                localStorage.getItem('user') ? (
                    <Component {...routeProps} />
                ) : (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: routeProps.location }
                            }}
                        />
                    )
            }
        />
    );
};
export default RoutesModule;