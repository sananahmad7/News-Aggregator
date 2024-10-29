import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllNews from "./components/AllNews";
import TopHeadlines from "./components/TopHeadlines";
import ForYou from "./components/ForYou";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import React from "react";


function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/all-news" element={<AllNews />} />
          <Route path="/for-you" element={<ForYou />} />
          <Route path="/top-headlines/:category" element={<TopHeadlines />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
