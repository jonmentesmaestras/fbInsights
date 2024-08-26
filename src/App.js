import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import MyPagePosts from './MyPagePosts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/my-page-posts" element={<MyPagePosts />} />
      </Routes>
    </Router>
  );
}

export default App;
