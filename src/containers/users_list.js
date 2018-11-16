import React, {Component} from 'react';
import {connect} from "react-redux";

class UsersList extends Component {


    renderUsers(usersData) {
        usersData.users.map((user) => {
            console.log("User data: ", user);
            const userId = user.id;
            console.log("userId: ", userId);
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
            });

        /*const userId = usersData.users.map(users => users.id);
        const firstName = usersData.users.map(users => users.first_name);
        const lastName = usersData.users.map(users => users.last_name);
        const email = usersData.users.map(users => users.email);
        const gender = usersData.users.map(users => users.gender);
        const ipAddress = usersData.users.map(users => users.ip_address);

        return (
            <tr key={userId}>
                <td>{userId}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>{gender}</td>
                <td>{ipAddress}</td>
            </tr>
        );*/
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