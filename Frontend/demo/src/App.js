import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Register from "./Components/Register";
import Login from './Components/Login';
import StudentProfile from './Components/StudentProfile';
import ShowStudentProfile from './Components/ShowStudentProfile';
import ForgetPassword from './Components/ForgetPassword';
import Navbar from "./Components/Navbar";
import AppFeedbackForm from './Components/AppFeedback';
import College from "./Components/College"
import CollegeRegister from './Components/CollegeRegister';
import CollegeLogin from './Components/CollegeLogin';
import Stream from './Components/Stream';
import Branch from './Components/Branch';
import Recruiters from './Components/Recruiters';
import University from './Components/University';
import RecruitersList from './Components/RecruitersList';
import UserProfile from './Components/UserProfile';
import Footer from './Components/Footer';
import SearchBar from './Components/HomePage/SearchBar';
import CollegePredictor from './Components/CollegePredictor';
import Aboutus from './Components/Aboutus';
import QuizComponents from './Components/QuizComponents';
import EventList from './Components/EventList';
import AppFeedbackList from './Components/AppFeedbackList';
import StreamPredictionPage from './Components/StreamPredictionPage';
import ShowCollege from './Components/ShowCollege';
import SignOutPage from './Components/Signout';



const AuthorizeAppFeedbackForm = () => {
  const loginStatus = sessionStorage['loginStatus']
  return loginStatus == '1' ? <AppFeedbackForm/> : <Login />
}
const AuthorizeCollegeRegister = () => {
  const role = sessionStorage['role']
  return role === 'college' ? <CollegeRegister/> : <CollegeLogin />
}
const AuthorizeQuizComponents = () => {
  const role = sessionStorage['role']
  return role === 'student' ? <QuizComponents/> : <Login />
}
const AuthorizeCollegePredictor = () => {
  const role = sessionStorage['role']
  return role === 'student' ? <CollegePredictor/> : <Login />
}
const AuthorizeRecruiters = () => {
  const role = sessionStorage['role']
  return role === 'HR' ? <Recruiters/> : <Login />
}

function App() {
  const isEliIgnored = false;
  if (sessionStorage['loginstatus'] == '1') {
    const isEliIgnored = true;
  } 


  return (
    
    <div>
    <BrowserRouter>
        <Navbar isELiIgnored={ isEliIgnored}> </Navbar>
          <Routes>
          <Route path="/" element={<SearchBar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element= { <Register/>} />
            <Route path="/regstudentprofile" element= { <StudentProfile/>} />
            <Route path="/showstudentprofile" element= { <ShowStudentProfile/>} />
            <Route path="/forgetpassword" element= { <ForgetPassword/>} />
            <Route path="/appfeedback" element= { <AuthorizeAppFeedbackForm/>} />
            <Route path="/college" element= { <College/>} />
            <Route path="/collegereg" element= { <AuthorizeCollegeRegister/>} />
            <Route path="/collegelogin" element= { <CollegeLogin/>} />
            <Route path="/stream" element= { <Stream/>} />
            <Route path="/branch" element= { <Branch/>} />
            <Route path="/recruit" element= { <AuthorizeRecruiters/>} />
            <Route path="/university" element= { <University/>} />
            <Route path="/recruitlist" element= { <RecruitersList/>} />
            <Route path="/profile" element= { <UserProfile/>} />
            <Route path="/predictor" element= { <AuthorizeCollegePredictor/>} />
            <Route path="/about" element={<Aboutus/>}/>
            <Route path="/test" element={<AuthorizeQuizComponents/>}/>
            <Route path="/predictor" element={<CollegePredictor/>}/>
            <Route path="/eventlist" element={<EventList/>}/>
            <Route path="/appfeedlist" element={<AppFeedbackList />} />
             <Route path="/searchcollege" element={<ShowCollege/>}/>
            <Route path="/signout" element={<SignOutPage />} />
          

            
           
          </Routes>
          <Footer></Footer>
      </BrowserRouter>
      
      <ToastContainer />
    
  </div>

  );
}

export default App;
