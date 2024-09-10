import './app.scss';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Parallax from './components/parallax/Parallax';
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

// import Test from './Test';

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Intro/>
    </section>
    <section id="Services"><Parallax type="services"/></section>
    <section>
      <Services/>
    </section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id="Contact">
      <Contact/>
    </section>
    {/* <Test/> */}
  </div>;
};

export default App;
