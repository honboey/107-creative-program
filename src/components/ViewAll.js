import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

function ViewAll() {
  const data = useStaticQuery(
    graphql`
    query {
      allPrismicEventListing {
        nodes {
          data {
            descriptor {
              text
            }
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
            month
            time_and_date {
              text
            }
          }
          id
        }
      }
    }
        `
  )

  const eventListingArray = data.allPrismicEventListing.nodes
  console.log(eventListingArray)

  const [open, setOpen] = useState(false)

  function toggleOpen() {
    console.log(open)
    setOpen(!open)
  }

  return (
    <section className={open === false ? "h-12 md:h-24 lg:h-28 overflow-hidden" : null}>
      <button
        onClick={toggleOpen}
        className="bg-107-juni-purple-100 hover:text-gray-700 w-full text-left">
        <div className="wrapper">
          <h2 className="text-5xl md:text-8xl font-medium">View all</h2>
        </div>
      </button>
      <div class="bg-blob-purple bg-no-repeat bg-cover">
        <ul className="wrapper flex flex-wrap justify-between">
          {
            eventListingArray.map((e) => {
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
      </div>
    </section>
  )
}

export default ViewAll