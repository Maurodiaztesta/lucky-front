import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import SplashPage from './pages/SplashPage/SplashPage';
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import LoginElectionPage from "./pages/LoginElectionPage/LoginElectionPage";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AdoptarPage from "./pages/AdoptarPage/AdoptarPage";
import MasPage from "./pages/MasPage/MasPage";
import Gallery from "./components/Gallery/Gallery";
import ResultadosFiltroPage from "./pages/ResultadosFiltroPage/ResultadosFiltroPage";
import FiltersPage from "./pages/FiltersPage/FiltersPage";
import PerfilAnimalPage from "./pages/PerfilAnimalPage/PerfilAnimalPage";
import DonationPage from "./pages/DonationPage/DonationPage";
import ApadrinarPage from "./pages/ApadrinarPage/ApadrinarPage";
import EstadoAdopcionPage from "./pages/EstadoAdopcionPage/EstadoAdopcionPage";
import MapPage from "./pages/MapPage/MapPage";
import OnboardingPage from "./pages/OnboardingPage/OnboardingPage";

// BORRAR
import Warning from "./components/Warning/Warning"
import NotificationPage from "./pages/NotificationPage/NotificationPage";






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
            <Route path="/gallery" element={<Gallery/>}/> 
            <Route path="/filterResults" element={<ResultadosFiltroPage/>}/> 
            <Route path="/filters" element={<FiltersPage/>}/> 
            <Route path="/perfilanimal" element={<PerfilAnimalPage></PerfilAnimalPage>}/> 
            <Route path="/donation" element={<DonationPage></DonationPage>}/>  
            <Route path="/apadrinar" element={<ApadrinarPage></ApadrinarPage>}/>  
            <Route path="/status" element={<EstadoAdopcionPage></EstadoAdopcionPage>}/>  
            <Route path="/map" element={<MapPage></MapPage>}/>  
            <Route path="/onboarding" element={<OnboardingPage></OnboardingPage>}/>
            <Route path="/notification" element={<NotificationPage></NotificationPage>}/>

            {/* BORRAR */}
            <Route path="/warning" element={<Warning></Warning>}/>  
          </Routes>
        </main>
      </Router> 
    </div>
  );
}

export default App;
