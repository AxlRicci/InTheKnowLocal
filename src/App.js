import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ScrollToTop from './components/function/ScrollToTop'


import Navbar from './components/navbar/navbar.component';
import Home from './pages/home/home';
import IssueList from './components/issue-list/issue-list.component';
import IssuePage from './pages/issue/issue-page.component';
import ContactPage from './pages/contact/contact-page.component';
// import AboutPage from './components/about/AboutPage';
// import LegacyMainPage from './components/legacy/LegacyMainPage';
import Footer from './components/footer/footer.component'

import './components/styles/global.scss'



const App = () => {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Navbar/>
        <Route exact path='/' component={Home} />
        <Route path='/features/:slug' component={IssuePage} />
        <Route path='/issues' component={IssueList} />
        <Route path='/contact' component={ContactPage} />
        {/* <Route path='/about' component={AboutPage} />
        <Route exact path='/city/:slug' component={LegacyMainPage} /> */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
