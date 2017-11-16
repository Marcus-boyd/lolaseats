import React from 'react';

const Seat = props => {
  let seatId = `${props.seat}${props.row}`
  return (
    <span id={seatId} className={props.row} onClick={props.handleClick}>
      {seatId}
    </span>
  )
};

export default Seat;
