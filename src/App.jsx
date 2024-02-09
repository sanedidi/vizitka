import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Loading from './Components/Loading/Loading';
import { useState } from 'react';
import { useEffect } from 'react';
import Present from './Components/Present/Present';
import About from './Components/About/About';
import Group from './Components/Group/Group';
import Partners from './Components/Partners/Partners';
import AboutComp from './Components/AboutComp/AboutComp';
import Request from './Components/Tgrequest/Request';
import Footer from './Components/Footer/Footer';
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
    <About />
    <Partners />
    <Group />
    <AboutComp />
    <div>
    <h2 className='req__title'>For cooperation, leave a request below</h2>
    <Request />
    </div>
    <Footer />
    </>
  );
}

export default App;
