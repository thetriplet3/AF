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
    render() {
        const { users } = this.props;
        return <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => {
                            return <User key={user.id} user={user} />
                        })
                    }
                </tbody>
            </table>
        </div>;
    }
}