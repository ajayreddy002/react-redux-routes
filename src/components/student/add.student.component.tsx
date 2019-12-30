import React from 'react';
import { validateFields } from '../../_services/form.validator';
import { toast, ToastContainer, Slide } from 'react-toastify'
import { BaseCommonServices } from '../../_services/base.services';
export default class AddStudentComponent extends React.Component<any>{
    state: any
    constructor(props: any) {
        super(props);
        this.state = {
            addTeacherForm: {
                email: '',
                password: '1236545',
                school_id: '1',
                student_name: '',
                parent_name: '',
                class_name: '',
                section_name: '',
                phone_number: ''
            },
            formErrors: {
                email: '',
                password: '',
                school_id: '1',
                student_name: '',
                parent_name: '',
                class_name: '',
                section_name: '',
                phone_number: ''
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    /** Field validation and field errors*/
    handleInputChange(e: any) {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
        formErrors[name] = validateFields.fieldValidation(name, value);
        this.setState({ formErrors, addTeacherForm: { ...this.state.addTeacherForm, [name]: value } });
    }

    // Send the post request to API
    handleSubmit(e: any) {
        e.preventDefault();
        if (this.state.addTeacherForm.email !== '' && this.state.addTeacherForm.student_name !== ''
            && this.state.addTeacherForm.class_name !== '' && this.state.addTeacherForm.phone_number !== '') {
            BaseCommonServices.postData('employee/create', this.state.addTeacherForm)
                .then((data: any) => {
                    toast.success(`${data.data}`, {
                        position: 'bottom-center',
                        transition: Slide
                    });
                    setTimeout(() => {
                        this.props.showAddStudentForm()
                    }, 1000)
                    this.setState({ addTeacherForm: {}, isAddForm: false })
                }).catch(e => {
                    toast.error(`${e.data}`, {
                        position: 'bottom-center',
                        transition: Slide
                    })
                })
        } else {
            toast.info('Please enter required params', {
                position: 'bottom-center',
                transition: Slide
            })
        }
    }

    render() {
        const { formErrors } = this.state;
        return (
            <div>
                <ToastContainer />
                <div className="add_form">
                    <div className="form_title">
                        <h1>Add Employee</h1>
                    </div>
                    <form action="">
                        <div className="form_block">
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="">Student Name:</label>
                                        <input type="text" className="form-control" name="student_name" placeholder="Enter Student Name"
                                            onChange={this.handleInputChange}
                                        />
                                        {formErrors.student_name.length > 0 &&
                                            <span className="err_msg">{formErrors.student_name}</span>
                                        }
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="">Parent Name</label>
                                        <input type="text" className="form-control" name="parent_name" placeholder="Enter Parent Name"
                                            onChange={this.handleInputChange}
                                        />
                                        {formErrors.parent_name.length > 0 &&
                                            <span className="err_msg">{formErrors.parent_name}</span>
                                        }
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="">Class name:</label>
                                        <input type="text" className="form-control" name="class_name" placeholder="Enter Class Name"
                                            onChange={this.handleInputChange}
                                        />
                                        {formErrors.class_name.length > 0 &&
                                            <span className="err_msg">{formErrors.class_name}</span>
                                        }
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="">Section Name</label>
                                        <input type="text" className="form-control" name="section_name" placeholder="Enter Section Name"
                                            onChange={this.handleInputChange}
                                        />
                                        {formErrors.section_name.length > 0 &&
                                            <span className="err_msg">{formErrors.section_name}</span>
                                        }
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="">Email:</label>
                                        <input type="text" className="form-control" name="email" placeholder="Enter Email"
                                            onChange={this.handleInputChange}
                                        />
                                        {formErrors.email.length > 0 &&
                                            <span className="err_msg">{formErrors.email}</span>
                                        }
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="">Phone number</label>
                                        <input type="text" className="form-control" name="phone_number" placeholder="Enter Phone Number"
                                            onChange={this.handleInputChange}
                                        />
                                        {formErrors.phone_number.length > 0 &&
                                            <span className="err_msg">{formErrors.phone_number}</span>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="btn_block">
                        <button type="button" onClick={(e) => this.handleSubmit(e)}>Add</button>
                        <button type="button" className="cancel" onClick={this.props.showAddStudentForm}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}