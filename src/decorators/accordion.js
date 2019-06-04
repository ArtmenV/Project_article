import React from 'react'

export default (OriginalComponent) => class DecoratorComponent extends React.Component {
  state = {
    openItemeId: null
  }

  toggleOpenItem = (openItemId) => 
    this.setState({ 
      openItemId: openItemId === this.state.openItemId ? null : openItemId
    });

  render() {
    return (
      <OriginalComponent 
        {...this.props} 
        {...this.state}
        toggleOpenItem = {this.toggleOpenItem}/>
      )
  }
}