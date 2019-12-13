import * as React from 'react';
import './login.component.scss';
import signUpImg from '../../assets/signup.png';
import { LoginActions } from '../../_store/actions/login.action.type';
import { connect } from 'react-redux';
import { validateFields } from '../../_services/form.validator';
// import { formValid } from '../../_services/form.errors';
import { toast } from 'react-toastify'
class LoginComponent extends React.Component<any>{
    public state: any;
    constructor(props: any) {
        super(props);
        this.state = {
            isSignIn: false,
            loginForm: {
                email: '',
                password: ''
            },
            signUpForm: {
                email: '',
                password: '',
                school_name: '',
                user_name: '',
                phone_number: '',
                school_address: ''
            },
            formErrors: {
                email: '',
                password: '',
                school_name: '',
                user_name: '',
                phone_number: '',
                school_address: ''
            }
        }

        this.showSignIn = this.showSignIn.bind(this);
        this.loginMethod = this.loginMethod.bind(this);
        this.signupMethod = this.signupMethod.bind(this);
    }

    // Hide and show of login and signup form
    showSignIn() {
        this.setState({
            isSignIn: !this.state.isSignIn
        });
    }

    loginMethod(e: any) {
        if (this.state.loginForm.email !== '' && this.state.loginForm.email !== '') {
            console.log('valid');
            this.props.login('school/login', this.state.loginForm);
        } else {
            toast.error('Please enter valid details', {
                position: 'bottom-center',
                autoClose: 8000,
                closeOnClick: true
            })
        }
    }

    signupMethod(e: any) {
        if (this.state.signUpForm.email !== '' && this.state.signUpForm.email !== ''
            && this.state.signUpForm.school_name !== '' && this.state.signUpForm.user_name !== '') {
            console.log('valid')
            this.props.register('school/create', this.state.signUpForm);
            this.showSignIn();
        } else {
            toast.error('Please enter valid details', {
                position: 'bottom-center',
                autoClose: 8000,
                closeOnClick: true
            })
        }
    }

    /** Field validation and field errors*/
    handleInputChange(event: any, formType: any) {
        event.preventDefault();
        const { name, value } = event.target;
        let formErrors = { ...this.state.formErrors };
        formErrors[name] = validateFields.fieldValidation(name, value);
        if (formType === 'login') {
            this.setState({ formErrors, loginForm: { ...this.state.loginForm, [name]: value } });
        }
        if (formType === 'signup') {
            this.setState({ formErrors, signUpForm: { ...this.state.signUpForm, [name]: value } });
        }
    }

    render() {
        const { formErrors } = this.state;
        const { registering, loggingIn } = this.props;
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
                                                            <input name="school_name" type="text" className="form-control" placeholder="Enter School Name"
                                                                onChange={(e) => this.handleInputChange(e, 'signup')} />
                                                            {formErrors.school_name.length > 0 &&
                                                                <span className="err_msg">{formErrors.school_name}</span>
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input name="user_name" type="text" className="form-control" placeholder="Enter User Name"
                                                                onChange={(e) => this.handleInputChange(e, 'signup')} />
                                                            {formErrors.user_name.length > 0 &&
                                                                <span className="err_msg">{formErrors.user_name}</span>
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input name="email" type="email" className="form-control" placeholder="Enter Email"
                                                                onChange={(e) => this.handleInputChange(e, 'signup')} />
                                                            {formErrors.email.length > 0 &&
                                                                <span className="err_msg">{formErrors.email}</span>
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input name="password" type="password" className="form-control" placeholder="Enter Password"
                                                                onChange={(e) => this.handleInputChange(e, 'signup')} />
                                                            {formErrors.password.length > 0 &&
                                                                <span className="err_msg">{formErrors.password}</span>
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input name="phone_number" type="text" className="form-control" placeholder="Enter Phone Number"
                                                                onChange={(e) => this.handleInputChange(e, 'signup')} />
                                                            {formErrors.phone_number.length > 0 &&
                                                                <span className="err_msg">{formErrors.phone_number}</span>
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <textarea name="school_address" className="form-control" id="" placeholder="Enter School Address"
                                                                onChange={(e) => this.handleInputChange(e, 'signup')}></textarea>
                                                            {formErrors.school_address.length > 0 &&
                                                                <span className="err_msg">{formErrors.school_address}</span>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="btn_block">
                                            <button type="button" onClick={(e) => this.signupMethod(e)}>Signup {registering && <span className="spinner-border"></span>}</button>
                                            {}
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
                                                    <input type="email" className="form-control sign_in" placeholder="Enter Email"
                                                        name="email" onChange={(e) => this.handleInputChange(e, 'login')} />
                                                    {formErrors.email.length > 0 &&
                                                        <span className="err_msg">{formErrors.email}</span>
                                                    }
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control sign_in" placeholder="Enter Password"
                                                        name="password" onChange={(e) => this.handleInputChange(e, 'login')} />
                                                    {formErrors.password.length > 0 &&
                                                        <span className="err_msg">{formErrors.password}</span>
                                                    }
                                                </div>
                                            </div>
                                        </form>
                                        <div className="btn_block">
                                            <button type="button" onClick={(e) => this.loginMethod(e)}> Login {loggingIn && <span className="spinner-border"></span>}</button>
                                            {loggingIn &&
                                                <div className="spinner-border text-primary" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                            }
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

function mapState(state: any) {
    const { loggingIn } = state.loginReducer;
    const { registering } = state.registration;
    return { loggingIn, registering };
}

const actionCreators = {
    login: LoginActions.login,
    logout: LoginActions.logout,
    register: LoginActions.register,
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginComponent);
export { connectedLoginPage as LoginComponent }