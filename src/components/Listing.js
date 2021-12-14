import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

function Listing() {
    return (
        <li className="w-11/24 lg:w-7/24 mb-8">
            <StaticImage src="../images/1x1.png" alt="" className="mb-4" />
            <h3>Art Somewhere Online</h3>
            <time>2, 9, 23, 30 Oct 2021</time>
            <p>Online</p>
            <p>Series of Art Somewhere online over zoom for Saturday morning creative hangouts</p>
            <p><a href="/">Learn more</a></p>
            <button className="pills-button">Tix</button>
        </li>
    )
}

export default Listing