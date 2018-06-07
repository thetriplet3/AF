import React, { Component } from 'react';
/* import createHistory from 'history/createBrowserHistory';

import ViewBook from './ViewBook'; */
class Book extends Component {

    navigateToBook = () => {
        /* const history = createHistory();

        history.push('/book', { book: this.props.book });

        history.go('/book'); */
    }

    handleInputChange = (event) => {
        var selectedObjs = [];
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        if (value) {
            selectedObjs.push(name);
        }
        else {
            var index = selectedObjs.indexOf(name)
            selectedObjs.splice(index, 1)
        }
        this.setState({ selectedObjs: selectedObjs })
    }
    render() {
        return (
            <tr>
                <td>
                    <input type="checkbox" id={this.props.book._id} onChange={this.handleInputChange} />
                </td>
                <td>{this.props.book.name}</td>
                <td>{this.props.book.author}</td>
                <td>{this.props.book.price}</td>
                <td>{this.props.book.year}</td>
                <td>{this.props.book.publisher}</td>
                <td>{this.props.book.isbn}</td>
                <td>
                    {<button onClick={this.navigateToBook}>View</button>}
                </td>
            </tr>
        );
    }
}

export default Book;