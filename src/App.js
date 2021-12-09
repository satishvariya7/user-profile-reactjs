import Home from './Components/Home'
import Welcome from './Components/Welcome'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './Components/About';
import Services from './Components/Services';
import Resume from './Components/Resume';
import Work from './Components/Work';
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <div className="preloader">
            <div className="loading-mask"></div>
            <div className="loading-mask"></div>
            <div className="loading-mask"></div>
            <div className="loading-mask"></div>
            <div className="loading-mask"></div>
          </div>
          
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Welcome">
              <Welcome />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Services">
              <Services />
            </Route>   
            <Route path="/Resume">
              <Resume />
            </Route>   
            <Route path="/Work">
              <Work />
            </Route>  
            <Route path="/Testimonials">
              <Testimonials />
            </Route>  
            <Route path="/Contact">
              <Contact />
            </Route>                          
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
