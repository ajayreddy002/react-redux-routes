import * as React from 'react';
import './login.component.scss';
import signUpImg from '../../assets/signup.png';
export class LoginComponent extends React.Component<{}>{
    render() {
        return (
            <div>
                <div className="main_bg">
                    <div className="container">
                        <div className="header">
                            <h2>LOGO</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <img src={signUpImg} alt="" />
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <form action="">
                                    <div className="form_block">
                                        <div className="form_title">
                                            <h1>Create your account.</h1>
                                            <p>Manage and take your school to the next level</p>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="school_name">School Name</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="user_name">User Name</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone_number">Phone Number</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}