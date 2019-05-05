import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"

import "./spin.css"

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
    <div className="bg-black min-h-screen text-white flex items-center justify-center flex-col">
      <div className="">
        <div className="flex">
          {[1, 2, 3, 4, 5].map(i => (
            <span className="stick animated infinite rotate" />
          ))}
        </div>
        <div className="flex">
          {[1, 2, 3, 4, 5].map(i => (
            <span className="stick animated infinite rotate" />
          ))}
        </div>
        <div className="flex">
          {[1, 2, 3, 4, 5].map(i => (
            <span className="stick animated infinite rotate reverse" />
          ))}
        </div>
        <div className="flex">
          {[1, 2, 3, 4, 5].map(i => (
            <span className="stick animated infinite rotate" />
          ))}
        </div>
        <div className="flex">
          {[1, 2, 3, 4, 5].map(i => (
            <span className="stick animated infinite rotate reverse" />
          ))}
        </div>
        <div className="flex">
          {[1, 2, 3, 4, 5].map(i => (
            <span className="stick animated infinite rotate" />
          ))}
        </div>
        <div className="flex">
          {[1, 2, 3, 4, 5].map(i => (
            <span className="stick animated infinite rotate reverse" />
          ))}
        </div>
        <div className="flex">
          {[1, 2, 3, 4, 5].map(i => (
            <span className="stick animated infinite rotate reverse" />
          ))}
        </div>
        <div className="flex">
          {[1, 2, 3, 4, 5].map(i => (
            <span className="stick animated infinite rotate" />
          ))}
        </div>
        <div className="flex">
          {[1, 2, 3, 4, 5].map(i => (
            <span className="stick animated infinite rotate reverse" />
          ))}
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
