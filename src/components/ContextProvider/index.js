import React from 'react';
import { AppProvider, AppConsumer } from './context';

class Red extends React.Component {
  render() {
    return (
      <AppProvider>
        <table>
          <tbody>
            <tr>
              <td>
              <AppConsumer>
                {(context) => (
                  <React.Fragment>
                    <h3 style={{color: 'green'}}>{context.number}</h3>
                    <button onClick={context.inc}>Click</button>
                  </React.Fragment>
                )}

              </AppConsumer>
            </td>
            <td>
              <AppConsumer>
                {(context) => (
                  <React.Fragment>
                    <h3 style={{color: 'red'}}>{context.number}</h3>
                    <button onClick={context.inc}>Click</button>
                  </React.Fragment>
                )}
              </AppConsumer>
            </td>
            </tr>
          </tbody>
        </table>
      </AppProvider>
    );
  }
}
export default Red;
