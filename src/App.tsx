import React from 'react';
import './App.css';
import { AuthService } from './_services/auth.service';
import { SideNavComponent } from './components/sidenav/sidenav.component';
import { Route, Switch } from 'react-router';
import { LoginComponent } from './components/login/login.component';
import { BrowserRouter } from 'react-router-dom';
export class App extends React.Component<{}>{
  public state: any;
  constructor(props: any) {
    super(props);
    this.state = {
      currentUser: {},
      isSignedIn: false
    }
    // this.getLoginStatus = this.getLoginStatus.bind(this)
  }
  async componentDidMount() {
    // const loginStatus = await this.getLoginStatus();
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
    // if (loginStatus !== undefined) {
    //   this.setState({
    //     currentUser: loginStatus,
    //     isSignedIn: true
    //   })
    // } else {
    //   this.setState({
    //     currentUser: {},
    //     isSignedIn: false
    //   })
    // }
  }
  // getLoginStatus() {
  //   AuthService.currentUser.subscribe(
  //     data => {
  //       if (data) {
  //         return data;
  //       } else {
  //         return {}
  //       }
  //     }
  //   )
  // }
  render() {
    if (this.state.isSignedIn) {
      return (
        <BrowserRouter>
          <SideNavComponent></SideNavComponent>
        </BrowserRouter>
      )
    } else {
      return (
        <BrowserRouter>
          <div>
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
export default App;
