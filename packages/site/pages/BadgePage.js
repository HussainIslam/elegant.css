import React from 'react'
import Example from '../components/Example'
import { SpanContainer } from '../snippets/snippets/';

const BadgePage = () => {
    const badges = [
        { text: 'Green', classes: 'badge-green' },
        { text: 'Red', classes: 'badge-red' },
        { text: 'Blue', classes: 'badge-blue' },
        { text: 'Orange', classes: 'badge-orange' },
        { text: 'Pink', classes: 'badge-pink' },
        { text: 'Black', classes: 'badge-black' },
        { text: 'Gray', classes: 'badge-gray' },
        { text: 'Green', classes: 'badge-outline-green' },
        { text: 'Red', classes: 'badge-outline-red' },
        { text: 'Blue', classes: 'badge-outline-blue' },
        { text: 'Orange', classes: 'badge-outline-orange' },
        { text: 'Pink', classes: 'badge-outline-pink' },
        { text: 'Black', classes: 'badge-outline-black' },
        { text: 'Gray', classes: 'badge-outline-gray' },
    ]

    const Badge = ({ text, classes }) => (
        <div>
            This is a badge.
            <SpanContainer classes={ classes }>{ text }</SpanContainer>
        </div>
    )

    return (
        <div>
            {
                badges.map(badge => (
                    <Example>
                        <Badge classes={badge.classes} text={ badge.text } />
                    </Example>) )
            }
        </div>
    )
}

export default BadgePage
