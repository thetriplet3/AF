'use strict';
import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class AddUser extends Component {
    static get propTypes() {
        return {
            addUser: PropTypes.func
        }
    }
    constructor(props) {
        super(props);
    }
    onNameChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.name = event.target.value;
    }
    onAddressChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.address = event.target.value;
    }
    onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.name) {
            this.props.addUser({ 
                name: this.name,
                address: this.address
            });
            this.name = '';
            this.address = '';
        }
    }
    render() {
        return <div>
            <form onSubmit={event => this.onSubmit(event)}>
                <label>Name:</label>
                <input type="text" onChange={event =>
                    this.onNameChange(event)} />

                <label>Address:</label>
                <input type="text" onChange={event =>
                    this.onAddressChange(event)} />
                <button type="submit">Add</button>
            </form>
        </div>;
    }
}