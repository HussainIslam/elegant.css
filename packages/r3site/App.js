import React from 'react'
import MarketingPage from './pages/MarketingPage'
import ElementsPage from './pages/ElementsPage'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const App = () => {

    return (
        <div>
            <Router>
                <div>
                    <ul className="navbar">
                        <li className="nav-item"><Link to="/">Home</Link></li>
                        <li className="nav-item"><Link to="/elements">Elements</Link></li>
                    </ul>
                </div>
                <Switch>
                    <Route path="/elements" component={ElementsPage}/>
                    <Route exact path="/" component={MarketingPage} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
