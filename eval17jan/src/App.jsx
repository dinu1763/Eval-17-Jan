import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Dashboard } from './components/Dashboard';
import { JobPosting } from './components/JobPosting';
import { Jobs } from './components/Jobs';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './components/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/jobs" element={<Jobs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/postjob"
          element={
            <PrivateRoute>
              <JobPosting />
            </PrivateRoute>
          }
        ></Route>

        <Route path="*" element={<h1>404 Page Not Found!</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
