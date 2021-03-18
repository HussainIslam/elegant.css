import React from 'react'
import { Container } from '../snippets/snippets'
import Example from '../components/Example'

const JumbotronPage = () => {

    const Jumbo = () => (
        <>
            <h1 className="jumbo-header">Jumbotron Header</h1>
            <p className="jumbo-body">
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
                Sed sed accumsan nisi. Duis varius tortor sed eros pellentesque ornare.
            </p>
            <div className="jumbo-footer">
                <div className="button-light-orange">Go Somewhere</div>

            </div>
        </>
    )
    
    return (
        <Example>
            <Container classes="jumbotron"><Jumbo /></Container>
        </Example>
    )
}

export default JumbotronPage
