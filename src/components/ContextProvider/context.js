import React from 'react';

const AppContext = React.createContext()

class AppProvider extends React.Component {
  state = {
    number : 10,
  }

  inc = () => {
    this.setState({
      number: this.state.number + 1,
    })
  }

  render() {
    return (
      <AppContext.Provider value={{...this.state, inc: this.inc}}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

const AppConsumer = AppContext.Consumer;
export { AppProvider, AppConsumer };
