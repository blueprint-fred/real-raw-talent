import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import FooterPage from './components/Footer'
import Navbar from './components/Navbar'
import HomePage from './pages'
import AboutPage from './pages/about'
import ContactPage from './pages/contact'
import DiscoverPage from './pages/discover'
import PrivacyPolicyPage from './pages/privacy-policy'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/discover" component={DiscoverPage}/>
        <Route path="/contact" component={ContactPage}/>
        <Route path="/privacy-policy" component={PrivacyPolicyPage}/>
      </Switch>
      <FooterPage/>
    </Router>
  )
}

export default App
