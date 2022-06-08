import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {NavBar} from './components/NavBar/NavBar';
import {BrowserRouter, Route} from 'react-router-dom';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {avatar} from './modules/profile/MyProfile';



function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>

        <NavBar/>
        <div className={'content'}>
          <Route path={'/profile'} component={()=><Profile avatar={avatar} name={'Elena Samoilenka'} login={'lenok-sam'}/>}/>
          <Route path={'/messages'} component={Dialogs}/>
        </div>


      </div>
    </BrowserRouter>

  );
}

export default App;
