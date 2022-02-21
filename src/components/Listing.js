import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

function Listing(props) {
    return (
        <ul className="wrapper flex flex-wrap justify-between">
            {
                props.ListingsArray.map((e) => {
                    return (
                        <li className="w-11/24 lg:w-7/24 mb-8" key={e.id}>
                            <a href={e.data.link.url}>
                                <GatsbyImage image={e.data.event_image.gatsbyImageData} alt={e.data.event_image.alt} className="mb-4"/>
                            </a>
                            <h3>{e.data.event_title === null ? null : (e.data.event_title.text)}</h3>
                            {e.data.time_and_date === undefined ? null : (<time>{e.data.time_and_date.text}</time>)}
                            {e.data.location_link === undefined ?
                                (<p className="no-underline">
                                    {e.data.location.text}</p>)
                                :
                                (
                                    <p className="mb-0">
                                        <svg viewBox="0 0 27 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-1 w-3">
                                            <g clipPath="url(#clip0_35_9)">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M3.95387 4.05601C-1.31812 9.46337 -1.31812 18.2306 3.95387 23.6404L12.7889 32.6968C12.9784 32.8905 13.2351 32.9993 13.5027 32.9993C13.7703 32.9993 14.027 32.8905 14.2165 32.6968L23.0456 23.6379C28.3182 18.23 28.3182 9.46276 23.0456 4.05357C17.773 -1.35562 9.22527 -1.3544 3.95149 4.05357L3.95387 4.05601ZM7.59603 13.4834C7.59638 12.2548 7.95189 11.0539 8.61761 10.0326C9.28333 9.01127 10.2294 8.21533 11.3361 7.74544C12.4428 7.27554 13.6605 7.15278 14.8353 7.39268C16.01 7.63258 17.089 8.22437 17.9359 9.09322C18.7827 9.96207 19.3594 11.069 19.5929 12.2739C19.8265 13.4789 19.7064 14.7279 19.248 15.8629C18.7895 16.9979 18.0132 17.968 17.0173 18.6505C16.0213 19.333 14.8504 19.6973 13.6526 19.6973C12.8571 19.6973 12.0694 19.5365 11.3344 19.2242C10.5995 18.9119 9.93176 18.4542 9.36933 17.8772C8.8069 17.3001 8.36081 16.6151 8.05654 15.8612C7.75228 15.1073 7.59579 14.2993 7.59603 13.4834V13.4834Z" fill="black" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_35_9">
                                                    <rect width="27" height="33" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <a href={e.data.location_link.url}>{e.data.location.text}</a>
                                    </p>
                                )
                            }
                            {e.data.cost === undefined ? null : (<p>{e.data.cost.text}</p>)}
                            <p>{e.data.descriptor.text}</p>
                            <p><a href={e.data.link.url}>Learn more</a></p>
                            {e.data.ticket_link === undefined ? null : (<a href={e.data.ticket_link.url}><button className="pills-button pills-button--green w-1/2" aria-label="Buy tickets"><p className="mx-auto mb-0">Tix</p></button></a>)}
                        </li >
                    )
                })
            }
        </ul >
    )
}

export default Listing