import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `purple` }}>
    <ul>
      <li>
        <Link to="/contact/">Contact</Link>
      </li>
      <li>
        <Link to="/about-css-modules/">About CSS modules</Link>
      </li>
    </ul>
    <Header headerText="Hello Gatsby!" />
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)