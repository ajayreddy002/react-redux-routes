import React from 'react';
export default class AddTeacherComponent extends React.Component<{}>{
    render() {
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
                                        <input type="text" className="form-control" placeholder="Enter Employee Name" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="">Email:</label>
                                        <input type="text" className="form-control" placeholder="Enter Email" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="form-group">
                                    <label htmlFor="">Subject name:</label>
                                        <input type="text" className="form-control" placeholder="Enter Subject Name" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="">Phone number</label>
                                        <input type="text" className="form-control" placeholder="Enter Phone Number" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="btn_block">
                        <button type="button">Add</button>
                        <button type="button" className="cancel">Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}