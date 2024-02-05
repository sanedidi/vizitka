import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Loading from './Components/Loading/Loading';
import { useState } from 'react';
import { useEffect } from 'react';
import Present from './Components/Present/Present';
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3300);
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
    <Header />
    <Hero />
    <Present />
    <Present />
    <Present />
    <Present />
    <Present />
    <Present />
    </>
  );
}

export default App;
