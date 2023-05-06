import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './App.scss';
import SplashPage from './pages/SplashPage/SplashPage';
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import LoginElectionPage from "./pages/LoginElectionPage/LoginElectionPage";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AdoptarPage from "./pages/AdoptarPage/AdoptarPage";
import MasPage from "./pages/MasPage/MasPage";



function App() {
  return (
    <div>
    <Router>
        <main>
          <Routes>
            <Route path="/" element={<SplashPage></SplashPage>}/>
            <Route path="/home" element={<HomePage></HomePage>}/>
            <Route path="/adopt" element={<AdoptarPage></AdoptarPage>}/>
            <Route path="/register" element={<RegisterPage></RegisterPage>}/>
            <Route path="/login" element={<LoginPage></LoginPage>}/>
            <Route path="/loginElection" element={<LoginElectionPage/>}/>            
            <Route path="/profile" element={<ProfilePage/>}/>            
            <Route path="/more" element={<MasPage></MasPage>}/>            
          </Routes>
        </main>
      </Router>

  
    </div>
  );
}

export default App;
