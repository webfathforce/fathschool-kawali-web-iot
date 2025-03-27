import React from 'react'

interface PROPS {
  title: string,
  desc?: string
}

const Title = ({ title, desc }: PROPS) => {
  return (
    <div className='my-4'>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  )
}

export default Title