import * as React from 'react';
import './login.component.scss';
import signUpImg from '../../assets/signup.png';
export class LoginComponent extends React.Component<{}>{
    public state: any;
    constructor(props: any) {
        super(props);
        this.state = {
            isSignIn: false
        }
        this.showSignIn = this.showSignIn.bind(this)
    }
    showSignIn() {
        this.setState({
            isSignIn: !this.state.isSignIn
        });
    }
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
                                {this.state.isSignIn &&
                                    <React.Fragment>
                                        <form action="">
                                            <div className="form_block">
                                                <div className="form_title">
                                                    <h1>Create your account.</h1>
                                                    <p>Manage and take your school to the next level</p>
                                                </div>
                                                <div className="row m-0">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Enter School Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Enter User Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input type="email" className="form-control" placeholder="Enter Email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input type="password" className="form-control" placeholder="Enter Password" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Enter Phone Number" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <textarea name="school_address" className="form-control" id="" placeholder="Enter School Address"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="btn_block">
                                            <button type="button">Signup</button>
                                        </div>
                                        <div className="sign_up_switch">
                                            <div className="login__account-msg">
                                                <span> Already have an account </span>&nbsp;&nbsp;
                                            <p onClick={this.showSignIn}>Sign In</p>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                }
                                {!this.state.isSignIn &&
                                    <React.Fragment>
                                        <form action="">
                                            <div className="form_block">
                                                <div className="form_title">
                                                    <h1>Hi,</h1>
                                                    <p>Plase login to manage your school</p>
                                                </div>
                                                <div className="form-group">
                                                    <input type="email" className="form-control sign_in" placeholder="Enter Email" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control sign_in" placeholder="Enter Password" />
                                                </div>
                                            </div>
                                        </form>
                                        <div className="btn_block">
                                            <button type="button">Login</button>
                                        </div>
                                        <div className="sign_up_switch">
                                            <div className="login__account-msg">
                                                <span> Don't have an account ? </span>&nbsp;&nbsp;
                                        <p onClick={this.showSignIn}>Sign Up</p>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}