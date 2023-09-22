import { Fragment } from 'react';
import About from './components/about/About';
import Article from './components/article/Article';
import Contacta from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Service from './components/service/Service';

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <About />
      <Service />
      <Article />
      <Contacta />
      <Footer />
    </Fragment>
  );
}

export default App;
