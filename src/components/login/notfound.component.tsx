import React from 'react';
import { AuthService } from '../../_services/auth.service';
export class NotFoundComponet extends React.Component {
    constructor(props: any){
        super(props);
        AuthService.logout();
        this.state = {
            isSignedIn: false
        }
    }
    render(){
        return(
            <div>
                Route Not found
            </div>
        )
    }
}