import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Listing from "../components/Listing"

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
      <div className="bg-blob-purple bg-no-repeat bg-cover">
        <Listing ListingsArray={eventListingArray}/>
      </div>
    </section>
  )
}

export default ViewAll