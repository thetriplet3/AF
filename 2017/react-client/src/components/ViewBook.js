import React, { Component } from 'react';

class ViewBook extends Component {

    render() {
        return (
            <div>
                <h1>Book Details</h1>
                {this.props.book && <h2>{this.props.book.name}</h2>}
                {this.props.book && <h3>By {this.props.book.author}</h3>}
            </div>
        );
    }
}

export default ViewBook;