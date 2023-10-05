import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import RegisterUser from './components/RegisterUser';
import GetStarted from './components/GetStarted';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" >
          <Route index element={<GetStarted />} />
          
          <Route path="signup" element={<RegisterUser />} />
          <Route  path="login" element={<Login />} />

          <Route element={<ProtectedRoute/>}>
            <Route path="/home" element={<Home />}  />
          </Route>

          <Route path="*" element={<div>Page Doesn't Exist</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
