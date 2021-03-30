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

export const Navbar= ({ items = [] }) => (
    <ul className="navbar outline">
        {
            items.length > 0 ?
            items.map((item, index) => (
                <li 
                    className={`nav-item ${index == items.length - 1 ? "active" : ""}`}
                >
                        {item} {index == items.length - 1 ? "" : ""}
                </li>
            )) : null
        }
    </ul>
)

export const Container = ({ children, classes }) => (
    <div className={ classes }>{ children }</div>
)

export const Jumbotron = ({ header, body, footer }) => {
    const Header = () => <div className="jumbo-header">{ header }</div>
    const Body = () => <div className="jumbo-body">{ body }</div>
    const Footer = () => <div className="jumbo-footer">{ footer }</div>
    const Content = () => (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )

    return(
        <Container classes="jumbotron" ><Content /></Container>    
    )
}

export const Alert = ({ header, message, footer, classes }) => {
    const Header = () => <div className="alert-header">{ header }</div>
    const Message = () => <div className="alert-body">{ message }</div>
    const Footer = () => <div className="alert-footer">{ footer }</div>
    const Content = () => (
        <>
            { header ? <Header /> : null }
            <Message />
            { footer ? <Footer /> : null }
        </>
    )
    return <Container classes={ classes }><Content /></Container>

}

export const SpanContainer = ({ children, classes }) => (
    <span className={ classes }>{ children }</span>
)