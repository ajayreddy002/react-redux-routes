import React, { Fragment } from 'react';
import { toast, Slide } from 'react-toastify';
import swal from 'sweetalert';
import { BaseCommonServices } from '../../_services/base.services';
import { SwalActions } from '../../_services/swal.alert.service';
import AddStudentComponent from './add.student.component';
export default class StudentComponent extends React.Component<any>{
    public state: any;
    constructor(props: any) {
        super(props);
        this.state = {
            isStudentAddForm: false,
            employeesList: [],
            filterValue: '',
            filteredData: [],
            open: false,
            selected: ''
        }
        this.getStudentsList = this.getStudentsList.bind(this);
        this.filterList = this.filterList.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
        this.showAddStudentForm = this.showAddStudentForm.bind(this);
    }
    getStudentsList() { }
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
    // Delete Student
    deleteStudent(id: number) {
        BaseCommonServices.deleteData(`employee/create/${id}`)
            .then(data => {
                if (data.status === 200) {
                    SwalActions.successAlert('Deleted ...')
                }
            }).catch(e => {
                SwalActions.errorAlert('Failed to delete')
            })
    }
    showAddStudentForm() {
        this.setState({
            isStudentAddForm: !this.state.isStudentAddForm
        });
        this.getStudentsList();
    }

    render() {
        return (
            <div>
                {this.state.isStudentAddForm &&
                    <div className="add_teacher_block">
                        <AddStudentComponent showAddStudentForm={this.showAddStudentForm}></AddStudentComponent>
                    </div>
                }
                {!this.state.isStudentAddForm &&
                    <div className="grid_block">
                        <div className="title_block">
                            <h2>Students List</h2>
                            <button type="button" onClick={() => this.showAddStudentForm()}><i className="fas fa-plus"></i> Add Student</button>
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
                                        <th scope="col">Student id</th>
                                        <th scope="col">Student Name</th>
                                        <th scope="col">Parent Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Class</th>
                                        <th scope="col">Section</th>
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
                                                            <i className="fas fa-trash-alt icon red_col" onClick={() => this.deleteStudent(item.id)}></i>
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