import React from 'react'

export default (OriginalComponent) => class DecoratorComponent extends React.Component {
  state = {
    isOpen: false
  }

  toggleOpen = () => 
    this.setState((state) => { 
     isOpen: !state.isOpen
    });

  render() {
    return (
      <OriginalComponent 
        {...this.props} 
        {...this.state}
        toggleOpen = {this.toggleOpen}/>
      )
  }
}