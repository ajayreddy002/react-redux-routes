import React, { Fragment } from 'react';
import './teacher.component.scss';
import AddTeacherComponent from './add.teacher.component';
import { BaseCommonServices } from '../../_services/base.services';
import { toast, Slide } from 'react-toastify';
export default class TeachersComponent extends React.Component<{}>{
    public state: any;
    constructor(props: any) {
        super(props);
        this.state = {
            isAddForm: false,
            employeesList: []
        }
        this.showAddTeacherForm = this.showAddTeacherForm.bind(this)
        this.getEmployees = this.getEmployees.bind(this)
    }
    showAddTeacherForm() {
        this.setState({
            isAddForm: !this.state.isAddForm
        })
    }
    componentDidMount() {
        this.getEmployees()
    }
    getEmployees() {
        BaseCommonServices.getData('school/emp-list/1')
            .then((data: any) => {
                this.setState({
                    employeesList: data.data.staffList
                })
            }).catch(e => {
                toast.info('Something went wrong', {
                    position: 'bottom-center',
                    transition: Slide
                })
            })
    }
    render() {
        return (
            <div>
                {this.state.isAddForm &&
                    <div className="add_teacher_block">
                        <AddTeacherComponent showAddTeacherForm={this.showAddTeacherForm}></AddTeacherComponent>
                    </div>
                }
                {!this.state.isAddForm &&
                    <div className="grid_block">
                        <div className="title_block">
                            <h2>Teachers List</h2>
                            <button type="button" onClick={() => this.showAddTeacherForm()}><i className="fas fa-plus"></i> Add Teacher</button>
                        </div>
                        <div className="search_block">
                            <input type="text" placeholder="Search..." className="form-control search_input" />
                            <span> <i className="fas fa-search"></i> </span>
                        </div>
                        <div className="emp_list">
                            <table className="table">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Employee id</th>
                                        <th scope="col">Employee Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Subject</th>
                                        <th scope="col">Phone Number</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.employeesList.map((item: any) =>
                                            <Fragment key={item.id}>
                                                <tr>
                                                    <td>{item.id}</td>
                                                    <td>{item.employee_name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.subject}</td>
                                                    <td>{item.phone_number}</td>
                                                    <td>
                                                        <div className="icon_block">
                                                            <i className="far fa-edit icon"></i>
                                                            <i className="fas fa-trash-alt icon red_col"></i>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </Fragment>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                }
            </div>
        )
    }
}