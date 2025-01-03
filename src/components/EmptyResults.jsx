// import React from 'react'
import img from "../assets/illustration-empty.svg";

const EmptyResults = () => {
  return (
    <article className="results empty">
      <img src={img} alt="illustration empty results" />
      <h1>Results shown here</h1>
      <p>
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </article>
  )
}

export default EmptyResults
