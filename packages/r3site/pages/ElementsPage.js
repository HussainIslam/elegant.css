import React from 'react'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'
import ButtonPage from './ButtonPage'

const ElementsPage = () => {
    const { path, url } = useRouteMatch();
    
    class ElementRouteClass {
        constructor(path, component, name){
            this.path = path;
            this.component = component;
            this.name = name;
        }
    }

    const elements_route = [
        new ElementRouteClass("", <div>Please select an element</div>, "Elements Home"),
        new ElementRouteClass("buttons", ButtonPage, "Buttons"),
    ]

    return (
        <div>
            <h1>This is R3Elements page</h1>
            <ul>
                {
                    elements_route.map(route=><li><Link to={`${url}/${route.path}`}>{route.name}</Link></li>)
                }
                
            </ul>
            <Switch>
                {
                    elements_route.map(element=> (
                        <Route exact 
                            path={`${path}/${element.path}`} 
                        >
                            { element.component }
                        </Route>))
                }
            </Switch>
        </div>
    )
}

export default ElementsPage
