import React, { useState } from 'react';
import MonthFilterButton from "../components/MonthFilterButton"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

function SpecialEvents() {
    const data = useStaticQuery(
        graphql`
        query {
            allPrismicEventListing (filter: {tags: {eq: "special events"}}){
              nodes {
                data {
                  descriptor {
                    text
                  }
                  event_date(formatString: "DD MMMM, YYYY")
                  event_image {
                    alt
                    gatsbyImageData
                  }
                  event_title {
                    text
                  }
                  link {
                    url
                  }
                  location {
                    text
                  }
                  ticket_link {
                    url
                  }
                }
                id
              }
            }
          }
        `
    )

    const eventListingArray = data.allPrismicEventListing.nodes

    const [open, setOpen] = useState(false)

    function toggleOpen() {
        console.log(open)
        setOpen(!open)
    }

    return (
        <section className={open === false ? "h-12 md:h-24 lg:h-28 overflow-hidden" : null}>
            <button
                onClick={toggleOpen}
                className="bg-107-reva-green-100 hover:text-gray-50 w-full text-left">
                <div className="wrapper">
                    <h2 className="text-5xl md:text-8xl font-medium">Special Events</h2>
                </div>
            </button>
            <div className="bg-107-reva-green-100">
                <div className="wrapper">
                    <div className="flex flex-wrap justify-between -mx-1 lg:-mx-4">
                        <MonthFilterButton month="Jan" colour="green" />
                        <MonthFilterButton month="Feb" colour="green" />
                        <MonthFilterButton month="Mar" colour="green" />
                        <MonthFilterButton month="Apr" colour="green" />
                        <MonthFilterButton month="May" colour="green" />
                        <MonthFilterButton month="Jun" colour="green" />
                        <MonthFilterButton month="Jul" colour="green" />
                        <MonthFilterButton month="Aug" colour="green" />
                        <MonthFilterButton month="Sep" colour="green" />
                        <MonthFilterButton month="Oct" colour="green" />
                        <MonthFilterButton month="Nov" colour="green" />
                        <MonthFilterButton month="Dec" colour="green" />
                    </div>
                </div>
            </div>
            <ul className="wrapper flex flex-wrap justify-between">
                {
                    eventListingArray.map((e) => {
                        return (
                            <li className="w-11/24 lg:w-7/24 mb-8" key={e.id}>
                                <GatsbyImage image={e.data.event_image.gatsbyImageData} alt={e.data.event_image.alt} className="mb-4" />
                                <h3>{e.data.event_title.text}</h3>
                                <time>{e.data.event_date}</time>
                                <p>{e.data.location.text}</p>
                                <p>{e.data.descriptor.text}</p>
                                <p><a href={e.data.link.url}>Learn more</a></p>
                                <a href={e.data.ticket_link.url}><button className="pills-button pills-button--green w-1/2" aria-label="Buy tickets"><p className="mx-auto mb-0">Tix</p></button></a>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default SpecialEvents