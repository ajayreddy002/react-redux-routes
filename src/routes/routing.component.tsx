import * as React from 'react';
import { Switch, Route, RouteProps, Redirect } from 'react-router-dom';
import { DashBoardComponent } from '../components/dashboard/dashboard.component';
import { NotFoundComponet } from '../components/login/notfound.component';
import TeachersComponent from '../components/employee/teacher.component';
import StudentComponent from '../components/student/student.component';
export interface PrivateRouteProps extends RouteProps {
    component: React.ComponentType<any>;
}
const RoutesModule = () => {
    return (
        <Switch>
            <PrivateRoute path="/" exact component={DashBoardComponent}></PrivateRoute>
            <PrivateRoute path="/dashboard" exact component={DashBoardComponent}></PrivateRoute>
            <PrivateRoute path="/teacher" exact component={TeachersComponent}></PrivateRoute>
            <PrivateRoute path="/student" exact component={StudentComponent}></PrivateRoute>
            <PrivateRoute path="*" exact component={NotFoundComponet}></PrivateRoute>
        </Switch>
    )
}
/** Checking is user has access to routes*/
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