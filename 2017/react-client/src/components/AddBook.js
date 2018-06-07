import React, { Component } from 'react';

class AddBook extends Component {


    onSubmit(e) {
        e.preventDefault();

        var newBook = {
            name: e.target.elements.name.value,
            author: e.target.elements.author.value,
            price: e.target.elements.price.value,
            year: e.target.elements.year.value,
            publisher: e.target.elements.publisher.value,
            isbn: e.target.elements.isbn.value
        }
        console.log(newBook);
        this.props.addBook(newBook);
    }

    render() {
        return (
            <div>
                <h3>Add Book</h3>
                <form onSubmit={e => this.onSubmit(e)}>
                    <input type="text" name="name" placeholder="Name" />
                    <select name="author">
                        {
                            this.props.authors.map((author) => {
                                return <option key={author._id}>{author.firstName} {author.lastName}</option>
                            })
                        }
                    </select>
                    <input type="number" name="price" placeholder="Price" />
                    <input type="text" name="year" placeholder="Year" />
                    <input type="text" name="publisher" placeholder="Publisher" />
                    <input type="text" name="isbn" placeholder="ISBN" />
                    <button type="submit">Add Book</button>
                </form>
            </div>
        );
    }
}

export default AddBook;