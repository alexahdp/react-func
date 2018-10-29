import React, { useReducer } from 'react';

// useReducer
// https://reactjs.org/docs/hooks-reference.html#usereducer

const initialState = {
  count: 0,
};

const reducerActions = {
  inc(state) {
    return { count: ++state.count} ;
  },
  dec(state) {
    return { count: --state.count };
  },
}

function reducer(state, action) {
  return reducerActions[action.type](state);
};

const App = () => {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <header className="App-header">
        <h3>{state.count}</h3>
        <button onClick={() => dispatch({type: 'inc'})}>Inc</button>
      </header>
    </div>
  );
};

export default App;
