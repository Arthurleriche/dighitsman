import React from 'react'

export default class Stand extends React.Component {
  state = {
    stand: ''
  }

  render() {
    return (
      <div>
        <input onChange={(event) => this.setState({ stand: event.target.value })}type="text" value={this.state.stand}/>
        <h1 >{this.state.stand}</h1>
      </div>
    )
  }
}
