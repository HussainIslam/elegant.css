import React from 'react'
import Highlight from 'react-highlight'
import { renderToStaticMarkup } from 'react-dom/server'

const Snippet = ({ children }) => {
    return (
        <Highlight language="html">
            { renderToStaticMarkup(children) }
        </Highlight>
    )
}

export default Snippet
