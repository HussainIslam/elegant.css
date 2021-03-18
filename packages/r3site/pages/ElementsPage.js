import React from 'react'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'
import ButtonPage from './ButtonPage'

const ElementsPage = () => {
    const { path, url } = useRouteMatch();
    
    return (
        <div>
            <h1>This is R3Elements page</h1>
            <ul>
                <li><Link to={`${url}/buttons`}>Buttons</Link></li>
                <li><Link to={`${url}/something`}>Something</Link></li>
            </ul>
            <Switch>
                <Route exact path={path}><p>Please select an element</p></Route>
                <Route exact path={`${path}/buttons`} component={ButtonPage} />
            </Switch>
        </div>
    )
}

export default ElementsPage
