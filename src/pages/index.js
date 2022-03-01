import * as React from "react"
import Layout from "../components/Layout"
import ViewAll from "../components/ViewAll"
import Family from "../components/Family"
import Lgbtqia from "../components/Lgbtqia"
import Youth from "../components/Youth"
import FirstNations from "../components/FirstNations"
import SpecialEvents from "../components/SpecialEvents"
import Humans from "../components/Humans"
import Community from "../components/Community"

function IndexPage() {
  return (
    <Layout>
      <ViewAll />
      <Family />
      <Lgbtqia />
      <FirstNations />
      <Youth />
      <SpecialEvents />
      <Humans />
      <Community />
    </Layout>
  )
}

export default IndexPage