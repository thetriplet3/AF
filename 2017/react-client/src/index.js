import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import ViewBook from './components/ViewBook';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Route path="/" component={App} />
            {/* <Route path="/book" component={ViewBook} /> */}
        </div>
    </Router>, document.getElementById('root'));
registerServiceWorker();
