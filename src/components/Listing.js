import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

function Listing(props) {
    return (
        <ul className="wrapper flex flex-wrap justify-between">
          {
            props.ListingsArray.map((e) => {
              return (
                <li className="w-11/24 lg:w-7/24 mb-8" key={e.id}>
                  <GatsbyImage image={e.data.event_image.gatsbyImageData} alt={e.data.event_image.alt} className="mb-4" />
                  <h3>{e.data.event_title.text}</h3>
                  <time>{e.data.time_and_date.text}</time>
                  <p>{e.data.location.text}</p>
                  <p>{e.data.descriptor.text}</p>
                  <p><a href={e.data.link.url}>Learn more</a></p>
                  <a href={e.data.ticket_link.url}><button className="pills-button pills-button--green w-1/2" aria-label="Buy tickets"><p className="mx-auto mb-0">Tix</p></button></a>
                </li>
              )
            })
          }
        </ul>
    )
}

export default Listing