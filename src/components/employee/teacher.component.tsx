import React, { Fragment } from 'react';
import './teacher.component.scss';
import AddTeacherComponent from './add.teacher.component';
import { BaseCommonServices } from '../../_services/base.services';
import { toast, Slide } from 'react-toastify';
import { AuthService } from '../../_services/auth.service';
import EditEmpDialo from './edit.emp.dialo';
import swal from 'sweetalert';
export default class TeachersComponent extends React.Component<{}>{
    public state: any;
    constructor(props: any) {
        super(props);
        this.state = {
            isAddForm: false,
            employeesList: [],
            filterValue: '',
            filteredData: [],
            open: false,
            selected: ''
        }
        this.showAddTeacherForm = this.showAddTeacherForm.bind(this);
        this.getEmployees = this.getEmployees.bind(this);
        this.filterList = this.filterList.bind(this);
        this.showDialog = this.showDialog.bind(this);
        this.deleteEmp = this.deleteEmp.bind(this);
    }

    /** Show and hide the Add Form*/
    showAddTeacherForm() {
        this.setState({
            isAddForm: !this.state.isAddForm
        });
        this.getEmployees();
    }

    componentDidMount() {
        this.getEmployees()
    }

    /** Getting employees list*/
    getEmployees() {
        BaseCommonServices.getData('school/emp-list/1')
            .then((data: any) => {
                this.setState({
                    employeesList: data.data.staffList,
                    filteredData: data.data.staffList
                })
            }).catch(e => {
                if (e !== undefined && e.response.status === 401) {
                    alert('your session expired')
                    toast.error('your session expired', {
                        position: 'bottom-center',
                        transition: Slide
                    })
                    AuthService.logout();
                } else {
                    toast.info('Something went wrong', {
                        position: 'bottom-center',
                        transition: Slide
                    })
                }
            })
    }

    /**    Filetr the Employee List    */
    filterList(e: any) {
        this.setState({
            filterValue: e.target.value
        });
        const filterValue = e.target.value.toLowerCase();
        let filteredEmpList = this.state.employeesList.filter((item: any) => {
            /** Filtering through email | phone number | name*/
            return (item.employee_name.toLowerCase().indexOf(filterValue) === 0)
                || (item.email.toLowerCase().indexOf(filterValue) === 0) ||
                (item.phone_number.toLowerCase().indexOf(filterValue) === 0)
        });
        this.setState({
            filteredData: filteredEmpList
        });
    }
    showDialog(item: any) {
        this.setState({
            open: !this.state.open,
            selected: item
        });
    }
    // Delete employee
    deleteEmp(id: number) {
        swal({
            title: 'Are you sure?',
            text: 'Once deleted, you will not be able to recover!',
            icon: 'warning',
            buttons: {cancel: true, delete: true},
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                BaseCommonServices.deleteData(`employee/create/${id}`)
                    .then(
                        data => {
                            if (data.status === 200) {
                                swal("Deleted!", {
                                    icon: "success",
                                });
                                this.getEmployees();
                            } else {
                                toast.error(`Failed to delete`, {
                                    position: 'bottom-center',
                                    transition: Slide
                                })
                            }
                        }
                    ).catch(e => {
                        console.log(e)
                        toast.error(`Failed to delete`, {
                            position: 'bottom-center',
                            transition: Slide
                        })
                    })
            } else {
                swal("Ok!");
            }
        });
    }
    render() {
        return (
            <div>
                {/* Edit Employee Dialog */}
                {this.state.open &&
                    <EditEmpDialo showDialog={this.showDialog} empData={this.state.selected} isOpen={this.state.open}></EditEmpDialo>
                }
                {/* Add Form */}
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
                            <input type="text" placeholder="Search..." className="form-control search_input"
                                onChange={(e) => this.filterList(e)} value={this.state.filterValue}
                            />
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
                                        this.state.filteredData.map((item: any) =>
                                            <Fragment key={item.id}>
                                                <tr>
                                                    <td>{item.id}</td>
                                                    <td>{item.employee_name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.subject}</td>
                                                    <td>{item.phone_number}</td>
                                                    <td>
                                                        <div className="icon_block">
                                                            <i className="far fa-edit icon" onClick={() => this.showDialog(item)}></i>
                                                            <i className="fas fa-trash-alt icon red_col" onClick={() => this.deleteEmp(item.id)}></i>
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