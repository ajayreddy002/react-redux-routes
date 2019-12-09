import * as React from 'react';
import RoutesModule from '../../routes/routing.component';
import './sidenav.component.scss'
import { NavLink } from 'react-router-dom';
export class SideNavComponent extends React.Component<{}>{
    // constructor(props: any) {
    //     super(props)
    // }
    render() {
        console.log(localStorage.getItem('user'))
        return (
            <div>
                <div id="viewport">
                    {/* Sidebar */}
                    <div className="sidebar">
                        <header>
                            <p className="title">School App <i className="fas fa-angle-double-left"></i> </p>
                        </header>
                        <ul className="nav">
                            <li className="nav_li">
                                <NavLink to="/dashboard" className="nav-link" exact>
                                    <i className="fas fa-briefcase"></i>
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className="nav_li">
                                <NavLink to="/teacher" className="nav-link" exact>
                                    <i className="fas fa-chalkboard-teacher"></i>
                                    Teachers
                                </NavLink>
                            </li>
                            <li className="nav_li">
                                <NavLink to="/" className="nav-link" exact>
                                    <i className="fas fa-user-friends"></i>
                                    Students
                                </NavLink>
                            </li>
                            <li className="nav_li">
                                <NavLink to="/" className="nav-link" exact>
                                    <i className="fas fa-users"></i>
                                    Parents
                                </NavLink>
                            </li>
                            <li className="nav_li">
                                <NavLink to="/" className="nav-link" exact>
                                    <i className="fas fa-shuttle-van"></i>
                                    Transport
                                </NavLink>
                            </li>
                            <li className="nav_li">
                                <NavLink to="/" className="nav-link" exact>
                                    <i className="fas fa-school"></i>
                                    Schools
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* Content */}
                    <div id="content">
                        <div className="header_block">
                            <ul className="user_menu">
                                <li className="mr-sm-2">Signout</li>
                            </ul>
                        </div>
                        <div className="container-fluid">
                            <div className="route_view">
                                <RoutesModule></RoutesModule>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}