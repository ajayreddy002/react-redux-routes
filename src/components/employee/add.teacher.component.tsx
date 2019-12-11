import React from 'react';
import { formValid } from '../../_services/form.errors';
import { validateFields } from '../../_services/form.validator';
export default class AddTeacherComponent extends React.Component<any>{
    state: any
    constructor(props: any) {
        super(props);
        this.state = {
            addTeacherForm: {
                email: '',
                password: '',
                school_id: '',
                employee_name: '',
                subject: '',
                phone_number: ''
            },
            formErrors: {
                email: '',
                password: '',
                employee_name: '',
                subject: '',
                phone_number: ''
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleInputChange(e: any) {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
        formErrors[name] = validateFields.fieldValidation(name, value);
        this.setState({ formErrors, [name]: value })
    }
    handleSubmit(e: any) {
        e.preventDefault();
        if (formValid.validateForm(this.state.formErrors)) {
            console.log('valid')
        }
    }
    render() {
        const { formErrors } = this.state;
        return (
            <div>
                <div className="add_form">
                    <div className="form_title">
                        <h1>Add Employee</h1>
                    </div>
                    <form action="">
                        <div className="form_block">
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="">Employee Name:</label>
                                        <input type="text" className="form-control" name="employee_name" placeholder="Enter Employee Name"
                                            onChange={this.handleInputChange}
                                        />
                                        {formErrors.employee_name.length > 0 &&
                                            <span className="err_msg">{formErrors.employee_name}</span>
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
                                        <label htmlFor="">Subject name:</label>
                                        <input type="text" className="form-control" name="subject" placeholder="Enter Subject Name"
                                            onChange={this.handleInputChange}
                                        />
                                        {formErrors.subject.length > 0 &&
                                            <span className="err_msg">{formErrors.subject}</span>
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
                        <button type="button" onClick={this.handleSubmit}>Add</button>
                        <button type="button" className="cancel" onClick={this.props.showAddTeacherForm}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}