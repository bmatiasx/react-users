import React, {Component} from 'react';
import {connect} from "react-redux";

class UsersList extends Component {


    renderUsers(userData) {
        /*usersData.users.map((user) => {
            console.log("Single user data: ", user);
            console.log("userId: ", user.id);
            console.log("user first name: ", user.first_name);
            console.log("user last name: ", user.last_name);
                return (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                        <td>{user.gender}</td>
                        <td>{user.ip_address}</td>
                    </tr>
                )
            });*/
        console.log("Users data JSON: ", userData);
        const userId = userData.users.map(users => users.id);
        console.log("userId: ", userId);
        const firstName = userData.users.map(users => users.first_name);
        const lastName = userData.users.map(users => users.last_name);
        const email = userData.users.map(users => users.email);
        const gender = userData.users.map(users => users.gender);
        const ipAddress = userData.users.map(users => users.ip_address);

        return (
            <tr key={userId}>
                <td>{userId}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>{gender}</td>
                <td>{ipAddress}</td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>E-mail</th>
                    <th>Gender</th>
                    <th>IP</th>
                </tr>
                </thead>
                <tbody>
                {this.props.users.map(this.renderUsers)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({users}) {
    return {users};
}
export default connect(mapStateToProps)(UsersList);