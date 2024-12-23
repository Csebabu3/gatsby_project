import React from "react"
import "./categories.css"

function Category({ photoUrl, heading, description }) {
  return (
    <div className="category" style={{ backgroundImage: `url(${photoUrl})` }}>
      <div className="text">
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Category
