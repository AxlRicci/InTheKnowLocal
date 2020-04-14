import React from 'react';
import { useFirestoreConnect } from 'react-redux-firebase';
import Navbar from './components/navigation/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import ScrollToTop from './components/function/ScrollToTop'
import Home from './components/home/Home';
import IssueList from './components/issues/IssueList';
import IssuePage from './components/issues/IssuePage';
import ContactPage from './components/contact/ContactPage';
import AboutPage from './components/about/AboutPage';
import Footer from './components/navigation/Footer'

import './components/navigation/navbar.scss' // scss for navbar
import './components/styles/global.scss'
import LegacyMainPage from './components/legacy/LegacyMainPage';
import LegacyArticlePage from './components/legacy/LegacyArticlePage';



const App = () => {

  useFirestoreConnect(['features', 'questions', 'siteContent', 'placeholders', 'legacyRoutes']);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Navbar/>
        <Route exact path='/' component={Home} />
        <Route path='/features/:slug' component={IssuePage} />
        <Route path='/issues' component={IssueList} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/city/oakville-joette-fielding' component={LegacyMainPage} />
        <Route path='/city/:slug' component={LegacyArticlePage} />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
