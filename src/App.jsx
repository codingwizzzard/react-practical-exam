import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/add-student" element={<StudentForm />} />
        <Route path="/student/:id" element={<StudentDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
