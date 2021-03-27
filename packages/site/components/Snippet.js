import React, { useState, useEffect } from 'react'
import Highlight from 'react-highlight'
import { renderToStaticMarkup } from 'react-dom/server'

import SyntaxHighlight from "react-syntax-highlighter/dist/esm/prism-light";
import prism from "react-syntax-highlighter/dist/esm/styles/prism/material-oceanic";
import prettier from "prettier/standalone";
import htmlparser from "prettier/parser-html";


const Snippet = ({ children }) => {
    const [ code, setCode ] = useState(renderToStaticMarkup(children))
    
    useEffect(() => {
        const formatCode = () => {
          const formattedCode = prettier.format(code, {
            parser: "html",
            plugins: [htmlparser]
          });
    
          setCode(formattedCode);
        };
        formatCode();
      });

    return (
        <SyntaxHighlight language="html" style={prism} showLineNumbers={true} wrapLongLines={true}>
            { code}
        </SyntaxHighlight>
    )
}

export default Snippet
