import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import ContactPage from "./components/Contact";
import PortfolioPage from './components/Portfolio';
import NavTabs from './components/NavTabs'

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path='/' component={AboutMe} />
        <Route exact path='/portfolio' component={PortfolioPage} />
        <Route exact path='/contact' component={ContactPage} />
      </div>
    </Router>
  )
}

export default App;
