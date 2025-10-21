import React from 'react'

const heroSection = ({heading, subheading}) => {
  return (
    <div>
      <h1 className="text-3xl font-bold p-4">{heading}</h1>
      <p>{subheading}</p>
    </div>
  )
}

export default heroSection