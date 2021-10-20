import "./App.scss";
import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.css";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import Routes from "./config/Routes";

function App() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <>
            <Header {...props} />
            <Routes />
            <Footer />
          </>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
