import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "./spin.css"

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
    <div className="text-white flex items-center justify-center flex-col min-h-screen">
      <div className="sticks w-full">
        {[1, 2, 3, 4, 5].map(i => (
          <span className="stick animated infinite rotate1" />
        ))}
        {[1, 2, 3, 4, 5].map(i => (
          <span className="stick animated infinite rotate2" />
        ))}
        {[1, 2, 3, 4, 5].map(i => (
          <span className="stick animated infinite rotate1 reverse" />
        ))}
        {[1, 2, 3, 4, 5].map(i => (
          <span className="stick animated infinite rotate1" />
        ))}
        {[1, 2, 3, 4, 5].map(i => (
          <span className="stick animated infinite rotate2 reverse" />
        ))}
        {[1, 2, 3, 4, 5].map(i => (
          <span className="stick animated infinite rotate1" />
        ))}
        {[1, 2, 3, 4, 5].map(i => (
          <span className="stick animated infinite rotate1 reverse" />
        ))}
        {[1, 2, 3, 4, 5].map(i => (
          <span className="stick animated infinite rotate1" />
        ))}
        {[1, 2, 3, 4, 5].map(i => (
          <span className="stick animated infinite rotate1 reverse" />
        ))}
      </div>
    </div>
  </Layout>
)

export default IndexPage
