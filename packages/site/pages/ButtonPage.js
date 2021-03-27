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
        new ButtonClass("Dark Green", "button-dark-green"),
        new ButtonClass("Dark Red","button-dark-red"),
        new ButtonClass("Dark Blue", "button-dark-blue"),
        new ButtonClass("Dark Orange", "button-dark-orange"),
        new ButtonClass("Dark Yellow","button-dark-yellow"),
        new ButtonClass("Dark Pink","button-dark-pink"),
        new ButtonClass("Dark Purple","button-dark-purple"),
        new ButtonClass("Light Green","button-light-green"),
        new ButtonClass("Light Red","button-light-red"),
        new ButtonClass("Light Blue","button-light-blue"),
        new ButtonClass("Light Orange","button-light-orange"),
        new ButtonClass("Light Yellow","button-light-yellow"),
        new ButtonClass("Light Pink","button-light-pink"),
        new ButtonClass("Light Purple","button-light-purple"),
        new ButtonClass("Outline Default","outline-button"),
        new ButtonClass("Dark Green","button-outline-dark-green"),
        new ButtonClass("Dark Red","button-outline-dark-red"),
        new ButtonClass("Dark Blue","button-outline-dark-blue"),
        new ButtonClass("Dark Orange","button-outline-dark-orange"),
        new ButtonClass("Dark Yellow","button-outline-dark-yellow"),
        new ButtonClass("Dark Pink","button-outline-dark-pink"),
        new ButtonClass("Dark Purple","button-outline-dark-purple"),
        new ButtonClass("Light Green","button-outline-light-green"),
        new ButtonClass("Light Red","button-outline-light-red"),
        new ButtonClass("Light Blue","button-outline-light-blue"),
        new ButtonClass("Light Orange","button-outline-light-orange"),
        new ButtonClass("Light Yellow","button-outline-light-yellow"),
        new ButtonClass("Light Pink","button-outline-light-pink"),
        new ButtonClass("Light Purple","button-outline-light-purple"),
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
