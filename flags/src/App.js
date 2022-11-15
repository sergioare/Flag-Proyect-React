import React from 'react';
import './App.css';
import Countries from './components/Countries/Countries.jsx';
import {Provider} from "react-redux"
import store from "./redux/store/store.js"

function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <Countries/>
        </div>
    </Provider>
  );
}

export default App;
