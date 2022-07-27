import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {NavBar} from './components/NavBar/NavBar';
import {BrowserRouter, Route} from 'react-router-dom';
import {Profile} from './components/Profile/Profile';
import {StateType} from './redux/stateType';
import {Dialogs} from './components/Dialogs/Dialogs';
import store from './redux/store';
import DialogsContainer from './components/Dialogs/DialogsContainer';


type AppType = {
  state: StateType
  addPost: (postMessage: string) => void
}

function App() {
  let storeApp = store.getState()
  console.log(storeApp)
  return (
    <div className="app-wrapper">
      <Header/>

      <NavBar/>
      <div className={'content'}>
        {/*<Route*/}
        {/*  path={'/'}*/}
        {/*  exact*/}
        {/*  render={() => <Profile profile={state.profile}*/}
        {/*                         addPost={addPost}*/}
        {/*  />}/>*/}
        {/*<Route*/}
        {/*  path={'/profile'}*/}
        {/*  render={() => <Profile profile={state.profile}*/}
        {/*                         addPost={addPost}*/}
        {/*  />}/>*/}

        <Route
          path={'/messages'}
          render={() => <DialogsContainer/>}
        />

      </div>


    </div>

  );
}

export default App;
