'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User.jsx';

export default class Users extends Component {
    static get propTypes() {
        return {
            users: PropTypes.array
        }
    }
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(props) {
        this.setState(props)
    }
    render() {
        const { users } = this.props;
        return <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => {
                            return <User key={user._id} user={user} getAllUsers={() => this.props.getAllUsers()} />
                        })
                    }
                </tbody>
            </table>
        </div>;
    }
}