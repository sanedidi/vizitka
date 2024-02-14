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
import PreHero from './Components/PreHero/PreHero';
import Contacts from './Components/Contacts/Contacts';
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 33);
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
    <Header />
    {/* <Present /> */}
    <PreHero />
    <Hero />
    <About />
    <Group />
    <Partners />
    {/* <AboutComp /> */}
    <Contacts />
    <div>
      <h2 className="req__title-main">
        Request Form
      </h2>
    <h2 className='req__title'>For cooperation, leave a request below</h2>
    <Request />
    </div>
    <Footer />
    </>
  );
}

export default App;
