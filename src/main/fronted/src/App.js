import './assets/styles/App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Main from "./pages/main/main";
import Login from "./pages/login/login";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
