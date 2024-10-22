import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AllNews from "./components/AllNews";
import TopHeadlines from "./components/TopHeadlines";
import ForYou from "./components/ForYou";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<Header />}>
            <Route path="/for-you" element={<ForYou />} />
            <Route path="/all-news" element={<AllNews />} />
            <Route path="/top-headlines/:category" element={<TopHeadlines />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
