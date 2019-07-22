import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor () {
    super();

    this.state = {
      timesClicked: 0

   };
 }

 stateClick = () => {
    this.setState(prevState => ({
      timesClicked: prevState.timesClicked+1
    }))
  }

  render() {
    return (
      <button onClick={this.stateClick}>{this.state.timesClicked}</button>
    );
  }
}


