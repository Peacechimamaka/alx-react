import './App.css';
import notification from './Notifications';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Login from './Login/Login';
import CourseList from './CourseList/CourseList';


function App({ isLoggedIn }) {
  const listCourses = [
    {id: 1, name: "ES6", credit: 60},
    {id: 2, name: "Webpack", credit: 20},
    {id: 3, name: "React", credit: 40}
  ]
  return (
    <>
      <notification />
      <div className="App">
        <Header />
        {isLoggedIn ? (
          <CourseList listCourses={listCourses} />
        ) : (
        <Login />
      )}
      <Footer />
      </div>
    </>
  );
}

App.defaultProps = {
  isLoggedIn: false,
}

export default App;
