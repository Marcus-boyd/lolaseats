import React from 'react';
import seats from './seats.json';
import Cabin from './Cabin';
class PlaneContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedSeatId: null
    }
  }
  handleSeatselect(id) {
    this.setState({ selectedSeatId: id})
  }

  render() {

    return (
      <div>
        <Cabin
          className="First"
        />
        <br />
        <Cabin
          className="Business"
        />
        <br/>
        <Cabin
          className="Economy"
        />
      </div>
    )
  }
}
