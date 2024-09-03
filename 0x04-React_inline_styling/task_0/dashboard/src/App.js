import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from  'aphrodite';
import Notifications from './Notifications';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Login from './Login/Login';
import CourseList from './CourseList/CourseList';


class App extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = (event) => {
    const {logOut} = this.props;
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      logOut();
    }
  }

  render() {
    const {isLoggedIn} = this.props;

    const listCourses = [
    {id: 1, name: "ES6", credit: 60},
    {id: 2, name: "Webpack", credit: 20},
    {id: 3, name: "React", credit: 40}
  ];

  return (
    <>
      <Notifications />
      <div className={css(style.app)}>
        <Header />
        {isLoggedIn ? (
          <CourseList listCourses={listCourses} />
        ) : (
        <Login />
      )}
      <Footer className={css(style.app)}/>
      </div>
    </>
  );
  }
}

App.protoTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
}

const style = StyleSheet.create({
  app: {
    height: '100vh',
    maxWidth: '100vh',
    fontWeight: '500'
  },
  footer: {
    fontStyle: 'italic',
    textAlign: 'center',
    fontSize: '1em'
  }
});

export default App;
