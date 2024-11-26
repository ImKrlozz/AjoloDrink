import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Login from './Login';
import Signup from './Signup';
import Catalog from './Catalog';
import Detail from './Detail';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cocktail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;