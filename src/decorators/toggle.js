import React from 'react'

export default (OriginalComponent) =>
  class ToggleComponent extends React.Component {
    state = {
      isItemOpen: false
    }

    toggleItem = (e) => {
      this.setState((state) => {
        return {
          isItemOpen: !state.isItemOpen
        }
      })
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          isItemOpen={this.state.isItemOpen}
          toggleSomeItem={this.toggleItem}
        />
      )
    }
  }
