import './App.css'
import Spinner from './components/common/Spinner'
import AOS from "aos";
import { useState, useEffect } from 'react';
import MainPage from './components/sections/MainPage';
import "aos/dist/aos.css";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 300, easing: "ease-in-out", once: false });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Spinner />
        </div>
      ) : (
        <>

          <MainPage />

        </>
      )}
    </>
  )
}

export default App
