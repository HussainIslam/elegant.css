import React from 'react'
import Example from '../components/Example'
import { Breadcrumb } from '../snippets/snippets'

const BreadcrumbPage = () => {
    const breadList = ["Home", "Projects", "Project One"]
    
    return (
        <Example>
            <Breadcrumb items={ breadList } />
        </Example>
    )
}

export default BreadcrumbPage
