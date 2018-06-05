'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class User extends Component {
    static get propTypes() {
        return {
            user: PropTypes.object,
            getAllUsers: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
        this.apiUrl = 'http://localhost:3000/api/users/'
        this.user = this.props.user;
        this.getAllUsers = this.props.getAllUsers;
    }

    update(id, name) {
        var updatedName = prompt("Please enter updated name:", name);
        axios.put(this.apiUrl + id, { name: updatedName }).then(results => {
            if (results.status == 200) {
                this.getAllUsers();
            }
        })
    }

    delete(id) {
        axios.delete(this.apiUrl +  id).then(results => {
            if (results.status == 200) {
                this.getAllUsers();
            }
        })
    }

    render() {
        return <tr>
            <td>{this.user.name}</td>
            <td>{this.user.address}</td>
            <td><button onClick={(e) => this.update(this.user._id || this.user.id, this.user.name)}>Update</button></td>
            <td><button onClick={(e) => this.delete(this.user._id || this.user.id)}>Delete</button></td>
        </tr>
    }
}