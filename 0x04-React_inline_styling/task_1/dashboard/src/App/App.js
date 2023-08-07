import React from 'react';
import { StyleSheet, css } from 'aphrodite';
// import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  rootNotificationStyle: {
    position: 'absolute',
    width: '40%',
    right: '0'
  },

  App: {
    height: '100vh',
    maxWidth: '100vw',
    fontFamily: 'Arial, Helvetica, sans - serif',
  },

  appBody: {
    fontSize: '1rem',
    padding: '2em',
    borderBottom: '3px solid #e0354b',
    height: '45 %'
  }
});

class App extends React.Component {

  constructor(props) {
    super(props);
    this.isLoggedIn = props.isLoggedIn;
    this.logOut = props.logOut;
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    this.listNotifications = [
      { id: 1, value: "New course available", type: "default" },
      { id: 2, value: "New resume available", type: "urgent" },
      { id: 3, html: { __html: getLatestNotification() }, type: "urgent" },
    ];
  }


  handleKeyDown(e) {
    e.preventDefault();
    if (e.ctrlKey && e.key === 'h') {
      alert("Logging you out");
      this.logOut();
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <React.Fragment>
        <div className={css(styles.rootNotificationStyle)}>
          <Notifications listNotifications={this.listNotifications} />
        </div>
        <div className={css(styles.App)}>
          {/* Header */}
          <div className="App-header">
            <Header />
          </div>
          {/* Body */}
          <div className={css(styles.appBody)}>
            {/* Login */}
            {this.props.isLoggedIn ?
              <BodySectionWithMarginBottom title="Course list"><CourseList listCourses={this.listCourses} /></BodySectionWithMarginBottom>
              :
              <BodySectionWithMarginBottom title="Log in to continue"><Login /></BodySectionWithMarginBottom>
            }
            <BodySection title="News from the School">
              <p>Random Text</p>
            </BodySection>
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

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => { }
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};



export default App;
