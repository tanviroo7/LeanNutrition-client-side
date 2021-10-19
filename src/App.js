import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Services from "./components/Services/Services";
import Header from "./components/Header/Header";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Footer from "./components/Footer/Footer";
import Service from "./components/Service/Service";
import NotFound from "./components/NotFound/NotFound";
import Testimonial from "./components/Testimonial/Testimonial";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>

            <PrivateRoute path="/services">
              <Services />
            </PrivateRoute>

            <PrivateRoute path="/service/:serviceId">
              <Service />
            </PrivateRoute>

            <Route path="/testimonial">
              <Testimonial></Testimonial>
            </Route>

            <PrivateRoute path="/gallery">
              <Gallery></Gallery>
            </PrivateRoute>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
