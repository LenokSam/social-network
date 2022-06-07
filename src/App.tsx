import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {NavBar} from './components/NavBar/NavBar';
import {BrowserRouter, Route} from 'react-router-dom';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';

const link = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/586d0309-fd3e-4f1e-b819-005925d2930d/dcx3en1-c771f2fb-e2df-4e18-bf85-29b250a70d83.png/v1/fill/w_894,h_894,strp/polar_we_bare_bears_by_lord25t_dcx3en1-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYwMCIsInBhdGgiOiJcL2ZcLzU4NmQwMzA5LWZkM2UtNGYxZS1iODE5LTAwNTkyNWQyOTMwZFwvZGN4M2VuMS1jNzcxZjJmYi1lMmRmLTRlMTgtYmY4NS0yOWIyNTBhNzBkODMucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.tBuhuDeaMHBmO6aYcgWsGaE-qAwSUGUWTwccRCiW8mk'

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>

        <NavBar/>
        <div className={'content'}>
          <Route path={'/profile'} component={()=><Profile avatar={link} name={'Elena Samoilenka'} login={'lenok-sam'}/>}/>
          <Route path={'/messages'} component={Dialogs}/>
        </div>


      </div>
    </BrowserRouter>

  );
}

export default App;
