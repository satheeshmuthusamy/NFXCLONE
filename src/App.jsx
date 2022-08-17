import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Netflix from './pages/netflix';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route exact path="/login"element={<Login/>} />
      <Route exact path="/signup"element={<Signup/>} />
      <Route exact path="/"element={<Netflix/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

