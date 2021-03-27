import React from 'react'

const HtmlTagsPage = () => {
    return (
        <div>
            <h1>Header 1</h1>
            <h2>Header 2</h2>
            <h3>Header 3</h3>
            <h4>Header 4</h4>
            <h5>Header 5</h5>
            <h6>Header 6</h6>
            <header>This is a Header</header>
            <main>
            <p>Ordered List</p>
            <ol>
                <li>Item 1</li>
                <li>Item 2</li>
            </ol>

            <p>Unordered List</p>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
            </ul>
            </main>
            <section>
                <header>Cards</header>
                <div className="card">Hello World</div>
            </section>
            <br></br>

            {/* <p> "<section" className="rows" ></section>" </p> */}
            <header>Flexbox rows</header>
            <section className="rows">
                <div>Card 1</div>
                <div>Card 2</div>
                <div>Card 3</div>
            </section>
                <header>Flexbox columns</header>
            <section className="columns">
                <div>Card 4</div>
                <div>Card 5</div>
                <div>Card 6</div>
            </section>
            
        </div>
    )
}

export default HtmlTagsPage
