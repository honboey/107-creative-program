import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {Helmet} from "react-helmet";
import Nav from "./Nav"

function Layout({ children }) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>107 Projects | Creative Program </title>
                <meta name="keywords" content="107 Projects, arts, creative program" />
                <meta name="description" content="107 Projects' creative program for 2022" />
                <html lang="en" />
            </Helmet>
            <header className="wrapper">
                <div className="flex justify-between items-center pb-4 md:pb-8 lg:pb-12">
                    {/* Start 107 logo */}
                    <a href="https://107.org.au/" className="w-3/24 lg:w-2/24">
                        <svg width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                            <path d="M0 0V104H104V0H0ZM58.1631 92.8969C58.1631 87.8321 59.3277 84.3135 62.4013 84.3135C65.4749 84.3135 66.5949 87.8703 66.5949 92.9287C66.5949 95.372 66.3276 97.4018 65.7167 99.037H59.0604C58.4368 97.4018 58.1631 95.3402 58.1631 92.8969ZM99.0364 99.037H86.672C88.5047 93.0369 91.3301 87.6858 94.1364 83.849V78.2879H76.083V84.8543H85.6665C85.6665 84.8543 81.3711 89.7664 78.8384 99.037H73.4484C73.9384 96.8673 74.193 95.0539 74.193 92.8969C74.193 84.2499 70.2094 77.6007 62.4013 77.6007C54.5932 77.6007 50.6096 84.2817 50.6096 92.9287C50.6096 95.0857 50.8577 96.8673 51.3477 99.037H47.0905V78.2879H40.7842C40.3196 80.4767 37.7869 82.3665 35.0506 82.3665V88.1375H39.4287V99.037H4.96359V4.96299H99.0364V99.037Z" fill="#010101" />
                        </svg>
                    </a>
                    {/* End 107 logo */}
                    <Nav />
                </div>
                <section className="lg:flex lg:justify-between lg:items-center">
                    <h1 className="sr-only">107 Creative Program, 2022</h1>
                    <StaticImage src="../images/creative-program.svg" alt="Creative Program 2022 logo" layout="fullWidth" className="lg:w-1/2 mb-4 lg:mb-0" />
                    <p className="text-lg md:text-3xl lg:w-11/24">Perrovid itatendis intis et estis con res sam, vellacia venimin ihiciis sitios magnateni berum, comnias dolut incium et omnis unt quid miniantota doluptate re verum quiatestor rat aliatur? In nis ene por molores sit venem endion rae niminct emporuptatis untem quuntur?</p>
                </section>
            </header>
            <main>
                {children}
            </main>
            <footer className="wrapper text-center">
                <p>107 Redfern Street, Redfern</p>
                <p>3A Joynton Avenue, Green Square</p>
            </footer>
        </div>
    )
}

export default Layout