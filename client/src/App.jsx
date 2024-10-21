import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AllNews from "./components/AllNews";
import TopHeadlines from "./components/TopHeadlines";
import ForYou from "./components/ForYou"; // Import the ForYou component
import Login from "./components/Login"; // Import the Login component
import SignUp from "./components/SignUp"; // Import the Signup component
import CountryNews from "./components/CountryNews";

function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login />} /> {/* Login screen */}
          <Route path="/signup" element={<SignUp />} /> {/* Signup screen */}

          {/* Routes that include the Header */}
          <Route element={<Header />}>
            <Route path="/for-you" element={<ForYou />} /> {/* For You page */}
            <Route path="/top-headlines/:category" element={<TopHeadlines />} /> {/* Top Headlines */}
            <Route path="/all-news" element={<AllNews />} /> {/* All News page */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
