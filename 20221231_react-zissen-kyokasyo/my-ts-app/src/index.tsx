import {createRoot} from "react-dom/client"
import {App} from "./App";

const container = document.getElementById('root')
if (!container) throw new Error('Failed to find the root element');

const root = createRoot(container)
root.render(<App />)

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { App } from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );