import React from 'react'
import Example from '../components/Example'
import { Button } from '../snippets/snippets/'

const ButtonPage = () => {
    class ButtonClass {
        constructor(text, classes) {
            this.text = text;
            this.classes = classes;
        }
    }
    
    const buttons = [
        new ButtonClass("Default", "button"),
        new ButtonClass("Green", "button-green"),
        new ButtonClass("Red", "button-red"),
        new ButtonClass("Blue", "button-blue"),
        new ButtonClass("Orange","button-orange"),
        new ButtonClass("Pink","button-pink"),
        new ButtonClass("Default", "button-outline"),
        new ButtonClass("Outline Green", "button-outline-green"),
        new ButtonClass("Outline Red", "button-outline-red"),
        new ButtonClass("Outline Blue", "button-outline-blue"),
        new ButtonClass("Outline Orange","button-outline-orange"),
        new ButtonClass("Outline Pink","button-outline-pink"),
        new ButtonClass("Outline Gray","button-outline-gray")
    ]
    
    return (
        <div>
            {
                buttons.map(button=><Example>{ <Button text={button.text} classes={button.classes} /> }</Example>)
            }
        </div>
    )
}

export default ButtonPage
