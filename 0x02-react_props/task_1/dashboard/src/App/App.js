import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import './App.css';

function App() {
  return (
    <>
      <div className='root-notifications'>
        <Notifications />
      </div>
      <div className="App">
        {/* Header */}
        <div className="App-header">
            <Header />
        </div>
        {/* Body */}
        <div className="App-body">
          {/* Login */}
          <Login />
        </div>
        <div className='App-footer'>
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
