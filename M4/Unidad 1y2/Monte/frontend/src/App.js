import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Components/Layout/Header';
import Nav from './Components/Layout/Nav';
import Footer from './Components/Layout/Footer';

import HomePage from './Pages/HomePage';
import ContactoPage from './Pages/ContactoPage';
import GaleriaPage from './Pages/GaleriaPage';
import HistoriaPage from './Pages/HistoriaPage';
import NovedadesPage from './Pages/NovedadesPage';
import UbicacionPage from './Pages/UbicacionPage';

function App() {
  return(
      <Router>
      <Header />
      <Nav />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/historia" exact component={HistoriaPage} />
        <Route path="/galeria" exact component={GaleriaPage} />
        <Route path="/novedades" exact component={NovedadesPage} />
        <Route path="/ubicacion" exact component={UbicacionPage} />
        <Route path="/contacto" exact component={ContactoPage} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;