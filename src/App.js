import React from 'react'; 
import './App.css';
import styled from 'styled-components';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Header/>
          <AppBody>
            <Sidebar />
            <Switch> 
              <Route path="/" exact>
                <Chat/>
              </Route>
            </Switch>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

const AppBody= styled.div`
  display:flex;
  height:100vh;
`

export default App;
