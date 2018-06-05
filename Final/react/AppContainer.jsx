'use strict';

import React, { Component } from 'react';
import axios from 'axios';
import AddUser from './controllers/User/AddUser.jsx';
import Users from './components/User/Users.jsx';

export default class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
        this.apiUrl = 'http://localhost:3000/api/users/'
        this.getAllUsers();
    }
    getAllUsers() {
        axios.get(this.apiUrl).then(res => {
            console.log(res);
            this.setState({
                users: res.data.data || res.data
            });
        })
    }
    addUser(user) {
        axios.post(this.apiUrl, { name: user.name, address: user.address }).then(result => {
            if (result.status == 200) {
                this.getAllUsers();
            }
        }).catch(err => {
            alert(err);
        })
    }
    render() {
        return <div>
            <h2>Users App</h2>
            <AddUser addUser={user => this.addUser(user)} />
            <Users users={this.state.users} />
        </div>
    }
}