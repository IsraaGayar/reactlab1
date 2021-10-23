import React from 'react';

export default class Display extends React.Component {

    constructor() {
        super();
        this.state = {
            "id": "1",
            "jobTitleName": "Developer",
            "firstName": "Ahmed",
            "lastName": "Ali",
            "preferredFullName": "Ahmed Ali",
            "employeeCode": "E1",
            "region": "CA",
            "phoneNumber": "408-1234567",
            "emailAddress": "ahmed.ali@gmail.com"
        }
    }
    render() {
        return <div>
            <div>id : {this.state.id}</div>
            <div>job Title : {this.state.jobTitleName}</div>
            <div>First name : {this.state.firstName}</div>
            <div>Last name : {this.state.lastName}</div>
            <div>Full name : {this.state.preferredFullName}</div>
            <div>Employee code : {this.state.employeeCode}</div>
            <div>Region : {this.state.region}</div>
            <div>Phone number : {this.state.phoneNumber}</div>
            <div>E-mail address : {this.state.emailAddress}</div>
        </div>
    }

}