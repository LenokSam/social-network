import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {NavBar} from './components/NavBar/NavBar';
import {BrowserRouter, Route} from 'react-router-dom';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {StateType} from './redux/stateType';


type AppType = {
  state: StateType
}


function App({state}: AppType) {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>

        <NavBar/>
        <div className={'content'}>
          <Route
            path={'/profile'}
            render={() => <Profile profile={state.profile}/>}/>
          <Route
            path={'/messages'}
            render={() => <Dialogs messages={state.messages}/>}/>
        </div>


      </div>
    </BrowserRouter>

  );
}

export default App;
