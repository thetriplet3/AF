import React, { Component } from 'react';
import Book from './Book'

class BookList extends Component {

    CalculatePrice = (e) => {
        e.preventDefault();
        
        var selectedBooks = Array.prototype.slice.call(e.target.elements).filter(input => input.checked);
        var selectedBookIds = [];
        for(var i=0; i<selectedBooks.length; i++) {
            selectedBookIds.push(selectedBooks[i].id)
        }

        this.props.calculatePrice(selectedBookIds);
    }

    render() {
        return (
            <div>
                <h3>Book List</h3>
                <form onSubmit={this.CalculatePrice}>
                <table>
                    <thead>
                        <tr>
                            <th></th>
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
                <input type="submit" value="Calculate Price"/>
                </form>
            </div>
        );
    }
}

export default BookList;
