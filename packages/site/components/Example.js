import React from 'react'
import Preview from './Preview'
import Snippet from './Snippet'

const Example = ({ children }) => {
    return (
        <div>
            <Preview>{ children }</Preview>
            <Snippet>{ children }</Snippet>
        </div>
    )
}

export default Example
