import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import './App.css';
import PropTypes from 'prop-types';

class App extends React.Component {

  static listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40}
  ];

  static listNotifications = [
    {id: 1, value: "New course available", type: "default"},
    {id: 2, value: "New resume available", type: "urgent"},
    {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
  ];

  constructor(props) {
    super(props);
  }

  render() {
  return (
    <React.Fragment>
      <div className='root-notifications'>
        <Notifications listNotifications={this.listNotifications}/>
      </div>
      <div className="App">
        {/* Header */}
        <div className="App-header">
            <Header />
        </div>
        {/* Body */}
        <div className="App-body">
          {/* Login */}
          {this.props.isLoggedIn ? <CourseList listCourses={this.listCourses}/> : <Login />}
        </div>
        <div className='App-footer'>
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
  }
  
}


App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false
};

export default App;
