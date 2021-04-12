import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
// MDBREACT
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css'; 
import'mdbreact/dist/css/mdb.css';

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

// 2. Provide the engine to the app
// debug engine needs inlined source maps

ReactDOM.render(
  <StyletronProvider value={engine} debug={debug} debugAfterHydration>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StyletronProvider>,
  document.getElementById('root')
);

