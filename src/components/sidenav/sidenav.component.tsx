import * as React from 'react';
import RoutesModule from '../../routes/routing.component';
import './sidenav.component.scss'
import { NavLink } from 'react-router-dom';
export class SideNavComponent extends React.Component<{}>{
    // constructor(props: any) {
    //     super(props)
    // }
    render() {
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
                            <div className="row m-0">
                                <div className="col-md-4 col-sm-12"></div>
                                <div className="col-md-5 col-sm-12"></div>
                                <div className="col-md-3 col-sm-12">
                                    <div className="dash_short">
                                        {/* <span> Das <i className="fas fa-th"></i> </span> */}
                                        <ul className="ul_list">
                                            <li className="pr">
                                                <span>
                                                    User Name <i className="fas fa-user"></i>
                                                </span>
                                            </li>
                                            {/* <li>
                                                <span className="avatar_block">
                                                    <i className="fas fa-user"></i>
                                                </span>
                                            </li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
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