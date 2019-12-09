import React from 'react';
import './teacher.component.scss';
import AddTeacherComponent from './add.teacher.component';
export default class TeachersComponent extends React.Component<{}>{
    render() {
        return (
            <div>
                <AddTeacherComponent></AddTeacherComponent>
            </div>
        )
    }
}