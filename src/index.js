import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redax/redax-store';
import StoreContext from './StoreContext';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <StoreContext.Provider value = {store}>
        <App />
      </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());
store.subscribe( () => {
  let state = store.getState();
  rerenderEntireTree(state);
} );
