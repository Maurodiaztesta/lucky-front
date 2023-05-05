import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './App.scss';
import SplashPage from './pages/SplashPage/SplashPage';
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <div>
    <Router>
        <main>
          <Routes>
            <Route path="/" element={<SplashPage></SplashPage>}/>
            <Route path="/register" element={<RegisterPage></RegisterPage>}/>
            <Route path="/login" element={<LoginPage></LoginPage>}/>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
