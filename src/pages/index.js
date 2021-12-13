import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

function IndexPage() {
  return (
    <div>
      <header>
        <svg width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0V104H104V0H0ZM58.1631 92.8969C58.1631 87.8321 59.3277 84.3135 62.4013 84.3135C65.4749 84.3135 66.5949 87.8703 66.5949 92.9287C66.5949 95.372 66.3276 97.4018 65.7167 99.037H59.0604C58.4368 97.4018 58.1631 95.3402 58.1631 92.8969ZM99.0364 99.037H86.672C88.5047 93.0369 91.3301 87.6858 94.1364 83.849V78.2879H76.083V84.8543H85.6665C85.6665 84.8543 81.3711 89.7664 78.8384 99.037H73.4484C73.9384 96.8673 74.193 95.0539 74.193 92.8969C74.193 84.2499 70.2094 77.6007 62.4013 77.6007C54.5932 77.6007 50.6096 84.2817 50.6096 92.9287C50.6096 95.0857 50.8577 96.8673 51.3477 99.037H47.0905V78.2879H40.7842C40.3196 80.4767 37.7869 82.3665 35.0506 82.3665V88.1375H39.4287V99.037H4.96359V4.96299H99.0364V99.037Z" fill="#010101" />
        </svg>
        <nav>
          <ul>
            <li><a href="/about" className="font-bold text-xl bg-cyan-200">About</a></li>
            <li><a href="/about">What's On</a></li>
            <li><a href="/about">Space Hire</a></li>
            <li><a href="/about">Blog</a></li>
            <li><a href="/about">Volunteer</a></li>
            <li><a href="/about">Donate</a></li>
            <li><a href="/about">Subscribe</a></li>
            <li><a href="/about">Contact & FAQs</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>107 Creative Program, 2022</h1>
        <StaticImage src="../images/creative-program.svg" alt="Creative Program 2022 logo" />
        <p>Perrovid itatendis intis et estis con res sam, vellacia venimin ihiciis sitios magnateni berum, comnias dolut incium et omnis unt quid miniantota doluptate re verum quiatestor rat aliatur? In nis ene por molores sit venem endion rae niminct emporuptatis untem quuntur?
        </p>
        <section>
          <h2>View all</h2>
          <ul>
            <li><button>Jan</button></li>
            <li><button>Feb</button></li>
            <li><button>Mar</button></li>
            <li><button>Apr</button></li>
            <li><button>May</button></li>
            <li><button>Jun</button></li>
            <li><button>Jul</button></li>
            <li><button>Aug</button></li>
            <li><button>Sep</button></li>
            <li><button>Oct</button></li>
            <li><button>Nov</button></li>
            <li><button>Dec</button></li>
          </ul>
          <ul>
            <li>
              <StaticImage src="../images/1x1.png" alt="" />
              <h3>Art Somewhere Online</h3>
              <time>2, 9, 23, 30 Oct 2021</time>
              <p>Online</p>
              <p>Series of Art Somewhere online over zoom for Saturday morning creative hangouts</p>
              <p><a href="/">Learn more</a></p>
              <button>Tix</button>
            </li>
            <li>
              <StaticImage src="../images/1x1.png" alt="" />
              <h3>Art Somewhere Online</h3>
              <time>2, 9, 23, 30 Oct 2021</time>
              <p>Online</p>
              <p>Series of Art Somewhere online over zoom for Saturday morning creative hangouts</p>
              <p><a href="/">Learn more</a></p>
              <button>Tix</button>
            </li>
            <li>
              <StaticImage src="../images/1x1.png" alt="" />
              <h3>Art Somewhere Online</h3>
              <time>2, 9, 23, 30 Oct 2021</time>
              <p>Online</p>
              <p>Series of Art Somewhere online over zoom for Saturday morning creative hangouts</p>
              <p><a href="/">Learn more</a></p>
              <button>Tix</button>
            </li>
            <li>
              <StaticImage src="../images/1x1.png" alt="" />
              <h3>Art Somewhere Online</h3>
              <time>2, 9, 23, 30 Oct 2021</time>
              <p>Online</p>
              <p>Series of Art Somewhere online over zoom for Saturday morning creative hangouts</p>
              <p><a href="/">Learn more</a></p>
              <button>Tix</button>
            </li>
          </ul>
        </section>
        <section>
          <h2>Family</h2>
        </section>
        <section>
          <h2>LGBTQIA+</h2>
        </section>
        <section>
          <h2>Youth</h2>
        </section>
        <section>
          <h2>First Nations</h2>
        </section>
        <section>
          <h2>Special Events</h2>
        </section>
      </main>
      <footer>
        <p>107 Redfern Street, Redfern</p>
        <p>3A Joynton Avenue, Green Square</p>
      </footer>
    </div>
  )
}

export default IndexPage