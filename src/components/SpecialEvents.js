import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Listing from './Listing';

function SpecialEvents() {
  const data = useStaticQuery(
    graphql`
    query {
      allPrismicEventListing(filter: {tags: {eq: "special events"}}) {
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
        className="bg-107-reva-green-100 hover:text-gray-50 w-full text-left">
        <div className="wrapper">
          <h2 className="text-5xl md:text-8xl font-medium">Special Events</h2>
        </div>
      </button>
      <Listing ListingsArray={eventListingArray} />
    </section>
  )
}

export default SpecialEvents