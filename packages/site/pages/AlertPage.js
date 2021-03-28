import React from 'react'
import Example from '../components/Example'
import { Alert } from '../snippets/snippets'

const AlertPage = () => {

    const alerts = [
        { header: 'Alert', message: 'This is a very important message to the user of this app.', footer: 'You may find this useful', classes:"alert" },
        { header: 'Alert', message: 'This is a very important message to the user of this app.', footer: 'You may find this useful', classes:"alert-green" },
        { header: 'Alert', message: 'This is a very important message to the user of this app.', footer: 'You may find this useful', classes:"alert-red" },
        { header: 'Alert', message: 'This is a very important message to the user of this app.', footer: 'You may find this useful', classes:"alert-blue" },
        { header: 'Alert', message: 'This is a very important message to the user of this app.', footer: 'You may find this useful', classes:"alert-orange" },
        { message: 'This message only has body', classes:"alert-pink" },
        { message: 'This alert has a body and a footer ', footer: 'This is a footer', classes: 'alert-gray' }
    ]
    
    return (
        <div>
            {
                alerts.map(alert=>(
                    <Example key={alert.header}>
                        <Alert header={alert.header} message={alert.message} footer={ alert.footer } classes={ alert.classes } />
                    </Example>
                ))
            }
        </div>
    )
}

export default AlertPage
