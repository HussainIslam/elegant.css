import React from 'react'

export const Card = ({ header, title, desc, footer }) =>(
    <div className="card">
        <div className="card-header">{ header }</div>
        <div className="card-body">
            <div className="card-title">{ title }</div>    
            <div className="card-text">{ desc }</div>
        </div>
        <div className="card-footer">{ footer }</div>
    </div>
)

export const Button = ({ text, classes }) =>(
    <div className={classes}>{ text }</div>
)

export const Breadcrumb = ({ items = [] }) => (
    <ul className="breadcrumb">
        {
            items.length > 0 ?
            items.map((item, index) => (
                <li 
                    className={`bread-item ${index == items.length - 1 ? "active" : ""}`}
                >
                        {item} {index == items.length - 1 ? "" : "/"}
                </li>
            )) : null
        }
    </ul>
)