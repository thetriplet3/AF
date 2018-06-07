import React, { Component } from 'react';

class Book extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.book.name}</td>
                <td>{this.props.book.author}</td>
                <td>{this.props.book.price}</td>
                <td>{this.props.book.year}</td>
                <td>{this.props.book.publisher}</td>
                <td>{this.props.book.isbn}</td>
                <td>
                    <button>View</button>
                </td>
                <td>
                    <button>Edit</button>
                </td>
                <td>
                    <button>Delete</button>
                </td>
            </tr>
        );
    }
}

export default Book;