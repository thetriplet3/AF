import React, { Component } from 'react';
import axios from 'axios';

import BookList from './components/BookList';

const apiUrl = "http://localhost:3011/api";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      books: []
    }
    this.getAllBooks();
  }

  getAllBooks() {
    axios.get(`${apiUrl}/books`).then((data) => {
      console.log(data.data);
      this.setState({
        books: data.data
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Book Home</h1>
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
