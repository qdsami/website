import { Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css'
import SecondPage from './SecondPage.tsx';
import GetRandom from './getRandom.tsx';
import HomePage from './homePage.tsx';
import logo from './assets/logo.png';
import PageNotFound from './noPageFound.tsx'


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBkoQ9MD1k5vrtvumzV74AK9R5BjSvKgGs",
  authDomain: "react-portfolio-525db.firebaseapp.com",
  projectId: "react-portfolio-525db",
  storageBucket: "react-portfolio-525db.appspot.com",
  messagingSenderId: "39004061863",
  appId: "1:39004061863:web:4307eb1628a9aa4d0e9b82",
  measurementId: "G-TK5M08VR8H"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
analytics;

const App: React.FC = () => {
  return (
    <>
    <div className='header'>
      <Link to="/"><img className='logo-image' src={logo} /></Link>
      <div className='header-right'>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} >Home</NavLink>
        {/* <NavLink to="/second">Заметки</NavLink> */}
        <NavLink to="/random">Рандом</NavLink>

        {/* <select className="selectLang" defaultValue={"es"}>
        {LANGUAGES.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select> */}

      </nav>
      </div>
    </div>
        <div>
      <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path='*' element={<PageNotFound />}/>
      <Route path="/second" element={<SecondPage />} />
      <Route path="/random" element={<GetRandom /> } />

      </Routes>
    </div>
    </>
  );
}


export default App