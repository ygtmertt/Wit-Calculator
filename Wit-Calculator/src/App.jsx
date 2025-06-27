import React, { useReducer } from 'react';

import TotalDisplay from './components/TotalDisplay.jsx';
import CalcButton from './components/CalcButton.jsx';

import reducer, { initialState } from './store/reducers.jsx';
import {
  applyNumber,
  changeOperation,
  clearDisplay,
  applyEquals,
  addMemory,
  clearMemory,
  recallMemory,
} from './store/actions.jsx';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = (value) => {
    if (!isNaN(value)) {
      dispatch(applyNumber(value));
    } else if (['+', '-', '*', '/'].includes(value)) {
      dispatch(changeOperation(value));
    } else if (value === 'CE') {
      dispatch(clearDisplay());
    } else if (value === '=') {
      dispatch(applyEquals());
    } else if (value === 'M+') {
      dispatch(addMemory());
    } else if (value === 'MC') {
      dispatch(clearMemory());
    } else if (value === 'MR') {
      dispatch(recallMemory());
    }
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand">Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            {[
              ['M+', 'MR', 'MC'],
              [1, 2, 3],
              [4, 5, 6],
              [7, 8, 9],
              ['+', 0, '-'],
              ['*', '/', 'CE'],
              ['='],
            ].map((row, index) => (
              <div className="row" key={index}>
                {row.map((btn) => (
                  <CalcButton
                    key={btn}
                    value={btn}
                    onClick={() => handleClick(btn)}
                  />
                ))}
              </div>
            ))}
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
