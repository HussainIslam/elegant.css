import React from 'react'
import { Jumbotron } from '../snippets/snippets'
import Example from '../components/Example'

const JumbotronPage = () => {

        const header = "Jumbotron Header"
        const body = `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ut pretium dictum lacus sit amet porttitor. Nullam sollicitudin, 
            massa nec suscipit sodales, lacus erat varius enim, nec vehicula 
            nisi est at massa. Class aptent taciti sociosqu ad litora 
            torquent per conubia nostra, per inceptos himenaeos. Nulla 
            ligula justo, lobortis a viverra vel, porttitor a mi. Donec 
            dictum tempus erat. Mauris euismod scelerisque mauris, quis 
            consectetur lectus laoreet vel. Donec eros ante, laoreet 
            rhoncus tristique ut, sollicitudin et augue. Aenean vitae 
            urna vitae tellus feugiat scelerisque nec et purus. Nullam 
            bibendum dictum lorem, sed tincidunt enim scelerisque commodo. 
            Sed sed accumsan nisi. Duis varius tortor sed eros pellentesque ornare.`
        const Footer = () => <div className="button-light-orange">Go Somewhere</div>
    
    return (
        <Example>
            <Jumbotron header={header} body={ body } footer={ <Footer /> } />
        </Example>
    )
}

export default JumbotronPage
