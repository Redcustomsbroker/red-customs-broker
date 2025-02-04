import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Tracking from './pages/Tracking';
import Blog from './pages/Blog';
import Glossary from './pages/Glossary';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Quote from './pages/Quote';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tracking" component={Tracking} />
        <Route path="/blog" component={Blog} />
        <Route path="/glossary" component={Glossary} />
        <Route path="/login" component={Login} />
        <Route path="/quote" component={Quote} />
        <Route path="/dashboard" component={Dashboard} /> {/* Add this line */}
      </Switch>
    </Router>
  );
}

export default App;