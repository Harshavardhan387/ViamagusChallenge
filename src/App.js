import "./App.css";
// import RouterComp from "./RouterComp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RouterHeader from "./RouterHeader";
import LoginPage from "./login/LoginPage";
import VideoPage from "./video/VideoPage";
import DatePage from "./date/DatePage";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="">
          <RouterHeader />
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/video" element={<VideoPage />}></Route>
            <Route path="/date" element={<DatePage />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
