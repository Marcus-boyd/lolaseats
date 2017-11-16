import React from 'react';
import Seat from '../components/Seat'
import seats from './seats.json'

class Row extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let seats = this.props.seats.map( seat => {
      let seatId = `${seat.seat}${seat.row}`;
      if (seatId == this.props.selectedSeatId) {
        className = "selected"
      }

      let handleClick = () => {
        this.props.handleSeatselect(seatId)
      }

      return (
        <Seat
          key={seatId}
          id={seatId}
          className={seat.class}
          occupied={seat.occupied}
          premium={seat.premium}
          overWing={seat.overWing}
        />
      )
    })

    return (
      <span className="seat">{seats}</span>
    )
  }
}

export default Row;
