import React from 'react';
import createStore from 'react-waterfall';

// https://github.com/didierfranc/react-waterfall

const store = {
  initialState: {
    count: 0,
  },
  actionsCreators: {
    inc: (state) => ({count: state.count + 1}),
  },
};

const { connect, Provider, actions } = createStore(store);

const Counter = props => (<h3>{props.count}</h3>);
const CounterContainer = connect(state => state)(Counter);

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Provider>
          <CounterContainer />
          <button onClick={() => actions.inc()}>Inc</button>
        </Provider>
      </header>
    </div>
  );
};

export default App;
