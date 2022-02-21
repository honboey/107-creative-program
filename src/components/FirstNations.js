import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Listing from './Listing';

function FirstNations() {
  const data = useStaticQuery(
    graphql`
    query {
      allPrismicEventListing(
        sort: {fields: data___month_number, order: ASC}
        filter: {tags: {eq: "first nations"}}
        ) {
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
            call_to_action_text {
              text
            }
            call_to_action_link {
              url
            }
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
        className="bg-107-inqa-turquoise-100 hover:text-gray-700 w-full text-left">
        <div className="wrapper">
          <h2 className="text-5xl md:text-8xl font-medium">First Nations</h2>
        </div>
      </button>
      <div className="bg-blob-turquoise bg-no-repeat bg-cover">
        <Listing ListingsArray={eventListingArray} />
      </div>
    </section>
  )
}

export default FirstNations