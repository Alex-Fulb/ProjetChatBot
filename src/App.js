import { BrowserRouter as Router, Route } from "react-router-dom";
import { useReducer } from 'react';
import { Context } from './context/index';
import { reducer, initialState } from './reducer';
import { Home } from "./components/Home";
import {Chat} from "./components/chat/Chat"



import "./App.css";

export function App() {

  const [inputReducer, inputDispatch] = useReducer(reducer, initialState);

  return (
    <Router>
      
      <Context.Provider value= {{
        inputState : inputReducer,
        inputDispatch
      }}>
        <Route exact path="/" component={Home} />
        <Route exact path="/chat" component={Chat} />

      </Context.Provider>


    </Router>
  );
}
