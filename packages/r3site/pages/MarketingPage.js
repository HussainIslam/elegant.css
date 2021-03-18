import React from 'react'
import { Link } from 'react-router-dom'

const MarketingPage = () => {
    return (
        <div>
            <div className="jumbotron">
                <div className="jumbo-header">R3 Elements</div>
                <div className="jumbo-body">
                    <p>
                        R3 Elements is an initiative by Reactive Three Team. This CSS framework was built
                        as part of a weekly Hackathon arranged by <a href="http://www.mintbean.io">MintBean</a>.
                        They arrange cool Hackathons, workshops, and talks primarily for developers who know
                        how to code but want to polish that skill and at the same time look for developer job.
                    </p>

                    <p>
                        Reactive Three is part of an intensive program, called <a href="https://github.com/Mintbean/career-accelerator-handbook">
                        Developers Collective</a> arranged by Mintbean. This program is designed to help developers
                        who already know how to code, get job quickly and it works!!
                    </p>
                    <p>
                        R3 Elements is a CSS framework, created using <a href="https://sass-lang.com/">SASS</a>. Checkout
                        the documentation for ready-to-use elements and styling guideline.
                    </p>
                </div>
                <div className="jumbo-footer">
                    <Link to="/elements" className="button-outline-light-orange">Start Here</Link>
                </div>
            </div>
        </div>
    )
}

export default MarketingPage
