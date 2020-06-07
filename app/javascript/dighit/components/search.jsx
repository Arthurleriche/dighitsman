import React from 'react'

export default class Search extends React.Component {
  state = {
    search: ""
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchFunction(this.state.search)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.search}
            onChange={(event) => this.setState({ search: event.target.value })}
          />
        </form>
      </div>
    )
  }
}
