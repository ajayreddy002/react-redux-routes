import React from 'react';
import './App.scss';
import { AuthService } from './_services/auth.service';
import { SideNavComponent } from './components/sidenav/sidenav.component';
import { Route, Switch } from 'react-router';
import { LoginComponent } from './components/login/login.component';
import { BrowserRouter } from 'react-router-dom';
import { alertActions } from './_store/actionTypes/alertConstants';
import { connect } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
export class App extends React.Component<any>{
  public state: any;
  constructor(props: any) {
    super(props);
    this.state = {
      currentUser: {},
      isSignedIn: false
    }
    this.clearAlerts = this.clearAlerts.bind(this)
  }
  componentDidMount() {
    AuthService.currentUser.subscribe(
      data => {
        if (data) {
          if (this.state.currentUser === null || undefined || {}) {
            this.setState({
              currentUser: data,
              isSignedIn: true
            })
          }
        } else {
          this.setState({
            currentUser: {},
            isSignedIn: false
          })
        }
      }
    )
  }

  clearAlerts() {
    this.props.clearAlerts();
  }
  render() {

    /** Clearing Alerts from store*/
    setTimeout(() => {
      this.props.clearAlerts()
    }, 5000)
    const { alert } = this.props;

    /** Conditional Rendering  */
    if (this.state.isSignedIn) {
      return (
        <BrowserRouter>
          <ToastContainer />
          <SideNavComponent></SideNavComponent>
        </BrowserRouter>
      )
    } else {
      return (
        <BrowserRouter>
          <div>
            <ToastContainer />
            {alert.message &&
              <div className="alert_message">
                {alert.type === 'danger' &&
                  <div className={`${alert.type} alert_content`}>
                    <div className="icon_close">
                      <i className="fas fa-times"></i>
                    </div>
                    <p className="toast__type" onClick={() => this.clearAlerts()}> <span onClick={() => this.clearAlerts()}> <i className="fas fa-exclamation-triangle"></i> </span> Error</p>
                    <p className="toast__message">{alert.message} !</p>
                  </div>
                }
                {alert.type === 'success' &&
                  <div className={`${alert.type} alert_content`}>
                    <div className="icon_close">
                      <i className="fas fa-times"></i>
                    </div>
                    <p className="toast__type"> <span onClick={() => this.clearAlerts()}> <i className="fas fa-exclamation-triangle"></i> </span> Success</p>
                    <p className="toast__message">{alert.message} !</p>
                  </div>
                }
              </div>
              // <div className={`alert ${alert.type}`}>{alert.message}, {alert.type}
              // </div>
            }
            <Switch>
              <Route path="/login" component={LoginComponent} exact></Route>
              <Route path="*" component={LoginComponent}></Route>
            </Switch>
          </div>
        </BrowserRouter>
      )
    }
  }
}

function mapState(state: any) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export default connectedApp;
