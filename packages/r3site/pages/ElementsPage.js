import React from 'react'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'
import ButtonPage from './ButtonPage'
import CardPage from './CardPage'
import BreadcrumbPage from './BreadcrumbPage'
import NavbarPage from './NavbarPage'

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
        new ElementRouteClass("buttons", ButtonPage, "Buttons"),
        new ElementRouteClass("cards", CardPage, "Cards"),
        new ElementRouteClass("breadcrumbs", BreadcrumbPage, "Breadcrumb"),
        new ElementRouteClass("navbar", NavbarPage, 'Navbar' )
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
