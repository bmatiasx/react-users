import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchUsers} from "../actions";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        // Bind the internal methods of this class
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchUsers();
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                placeholder="Type whatever you want to fetch a user list"
                className="form-control"
                onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchUsers}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);