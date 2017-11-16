import React from 'react'
import seats from './seats.json'
import Row from './Row'

const Cabin = props => {
  return (
    <div>
      <Row
        className={seats.class}
      />
    </div>
  )
}

export default Cabin
