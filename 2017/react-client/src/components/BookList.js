import React, { Component } from 'react';
import Book from './Book'

class BookList extends Component {

    render() {
        return (
            <div>
                <h3>Book List</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Price</th>
                            <th>Year</th>
                            <th>Publisher</th>
                            <th>ISBN</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.books.map((book) => {
                                return <Book key={book._id} book={book} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default BookList;
