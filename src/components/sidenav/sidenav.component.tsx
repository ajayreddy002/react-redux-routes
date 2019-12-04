import * as React from 'react';
import RoutesModule from '../../routes/routing.component';
export class SideNavComponent extends React.Component<{}>{
    // constructor(props: any) {
    //     super(props)
    // }
    render() {
        return (
            <div>Helo SideNavComponent
                <div>
                    <RoutesModule></RoutesModule>
                </div>
            </div>
        )
    }
}