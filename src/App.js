import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import ServicesSec from "./pages/ServicesSec/index";
import Portfolio from "./pages/Portfolio/index";
import Blog from "./pages/Blog/index";
import Shop from "./pages/Shop/index";
import Contact from "./pages/Contact/index";
// layout visible in all pages
import Loader from "./components/loader";
import TopNavbar from "./pages/layout/Top-Navbar/index";
import Navbar from "./pages/layout/Navbar/index";
import Footer from "./pages/layout/Footer/index";
import BottomFooter from "./pages/layout/BottomFooter/index";
import Popup from "./components/popup";
import ButtonScroll from "./components/ButtonScrollToTop";
// style
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Loader />
      <TopNavbar />
      <Navbar />
      <Popup />
      
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={ServicesSec} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/blog" component={Blog} />
      <Route path="/shop" component={Shop} />
      <Route path="/contact" component={Contact} />

      <Footer />
      <BottomFooter />
      <ButtonScroll />

    </BrowserRouter>
  );
}

export default App;
