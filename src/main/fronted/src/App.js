import './assets/styles/App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Main from "./pages/main/main";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Account from "./pages/AccountSetting/AccountSetting";
import Gemini from "./pages/AI/Gemini";
import Wordbook from "./pages/wordbook/wordbook";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/account" element={<Account />} />
                <Route path="/gemini" element={<Gemini />} />
                <Route path="/wordbook" element={<Wordbook />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
