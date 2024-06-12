import './assets/styles/App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Main from "./pages/main/main";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Chatbot from "./pages/AI_example/Chatbot_Gemini";
import Account from "./pages/AccountSetting/AccountSetting";
import Gemini from "./pages/AI/Gemini";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/ai" element={<Chatbot />} />
                <Route path="/account" element={<Account />} />
                <Route path="/gemini" element={<Gemini />} />

            </Routes>
        </Router>
    </div>
  );
}

export default App;
