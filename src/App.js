import React from 'react';
import './App.css';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
// import FormikContainer from './components/FormikContainer/FormikContainer';
// import LoadSavedData from './LoadSavedData';
// import FormikForm from './FormikForm';
// import RegistrationForm from './RegistrationForm';

function App() {
  return (
    <div className="App">
      {/* <FormikForm /> */}
      {/* <RegistrationForm/> */}
      {/* <LoadSavedData /> */}
      {/* <FormikContainer /> */}
      <LoginForm />
      <SignUpForm />
    </div>
  );
}

export default App;
