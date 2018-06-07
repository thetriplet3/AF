import React, { Component } from 'react';
import axios from 'axios';


import AddBook from './components/AddBook';
import BookList from './components/BookList';

const apiUrl = "http://localhost:3011/api";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      books: [],
      authors: []
    }
    this.populateData();
  }

  populateData = () => {
    this.getAllBooks();
    this.getAllAuthors();
  }

  getAllBooks = () => {
    axios.get(`${apiUrl}/books`).then((data) => {
      console.log(data.data);
      this.setState({
        books: data.data
      })
    })
  }

  getAllAuthors = () => {
    axios.get(`${apiUrl}/authors`).then((data) => {
      console.log(data.data);
      this.setState({
        authors: data.data
      })
    })
  }

  addBook = (book) => {
    axios.post(`${apiUrl}/books`, book).then((data) => {
      if (data.status === 201) {
        this.populateData();
      }
    }).catch((error) => {
      alert(error);
    })
  }

  calculatePrice = (selectedBookIds) => {
    axios.post(`http://localhost:3010/api/books/total`, selectedBookIds).then((data) => {
      alert("Total : " + data.data);
    }).catch((error) => {
      alert(error);
    })
  }

  render() {
    return (
      <div>
        <h1>Book Home</h1>
        <AddBook authors={this.state.authors} addBook={this.addBook} />
        <BookList books={this.state.books} route={this.Route} calculatePrice = {this.calculatePrice} />
      </div>
    );
  }
}

export default App;
