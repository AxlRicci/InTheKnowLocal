import React from 'react';
import { useFirestoreConnect } from 'react-redux-firebase';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'
import Home from './components/Home';
import IssueList from './components/IssueList';
import IssuePage from './components/IssuePage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer'



const App = () => {

  useFirestoreConnect(['features', 'questions', 'siteContent'])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/features/:slug' component={IssuePage} />
        <Route path='/issues' component={IssueList} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/about' component={AboutPage} />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
