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
import {MyPostsContainer} from './components/Profile/MyPosts/MyPostsContainer';


type AppType = {
  state: StateType
  addPost: (postMessage: string) => void
}

function App() {

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
        <Route
          path={'/profile'}
          render={() => <MyPostsContainer/>}
        />

      </div>


    </div>

  );
}

export default App;
