import React from 'react'
import Example from '../components/Example'
import { Card, Button } from '../snippets/snippets'
import Preview from '../components/Preview'

const CardPage = () => {

    const CardHeader = () => (
        <div>Image Placeholder</div>
    )

    const CardBody = () => (
        <div>This is the body of the card</div>
    )

    const CardFooter = () => (
        <Button text="Do Something" classes="button-blue" />
    )

    return (
        <div>
            <Example>
                <Card 
                    header={ <CardHeader/> } 
                    title="Card Title"
                    desc="This is a long long text that is going
                            to be the description of the card.
                            This could be even longer."
                    footer={ <CardFooter /> } 
                />
            </Example>
            
        </div>
    )
}

export default CardPage
