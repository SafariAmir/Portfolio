import Header from "./components/Header/Header.jsx";
import Hero from "./components/hero/Hero.jsx";
import Experties from "./components/Experties/Experties.jsx";
import styles from "./styles/app.module.scss";
import Works from "./components/Works/Works.jsx";
import Portfolio from "./components/Portfolio/Protfolio.jsx";
import People from "./components/People/People.jsx";
import Footer from "./components/Footer/Footer.jsx";
const App = () => {
  //don't forget to add font link in index.html
  return (
    <div className={`bg-primary ${styles.container}`}>
      <Header />
      <Hero />
      <Experties />
      <Works />
      <Portfolio />
      <People />
      <Footer />
    </div>
  )
};

export default App;
