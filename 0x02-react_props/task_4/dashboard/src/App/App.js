import React from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import './App.css';
import PropTypes from 'prop-types';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
          {isLoggedIn ? <CourseList /> : <Login />}
        </div>
        <div className='App-footer'>
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};


export default App;
