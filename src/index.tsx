import React from 'react';
import {Provider} from "react-redux";
import {createRoot} from 'react-dom/client';
import App from './components/App/App';
import {store} from "./redux/store";

import './index.css';


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);
