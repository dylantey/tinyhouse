import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import reportWebVitals from './reportWebVitals';
import { Home, Host, Listing, Listings, NotFound, User } from './sections';
import './styles/index.css';

const client = new ApolloClient({
  uri: "/api",
});

const App = () => {
  return (
    <Router>
      <Routes>
        ### https://stackoverflow.com/questions/69877208/property-component-does-not-exist-on-type
        ### https://stackoverflow.com/questions/69866581/property-exact-does-not-exist-on-type
        ### https://medium.com/@manishsundriyal/whats-new-in-react-router-v6-20eefe665be9
        <Route path="/" element={<Home />} /> 
        <Route path="/host" element={<Host />} />
        <Route path="/listing/:id" element={<Listing />} />
        <Route path="/listings/:location" element={<Listings />} /> ## v6 doesn't support optional parameters "?"
        <Route path="/user/:id" element={<User />} />
        <Route path= "*" element={<NotFound />} /> ### The "*" has special meaning here. It will match only when no other routes do.
      </Routes>
    </Router>
  )
}
render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
