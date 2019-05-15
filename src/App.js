import React, { PureComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import IndexRoute from './routes/IndexRoute';
import configureStore from "./store";

class Root extends PureComponent {
  componentDidMount() {
    document.body.style.backgroundColor = 'lightblue';
  }

  render() {
    return (
      <Provider store={configureStore()}>
        <BrowserRouter>
          <IndexRoute />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
