import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {AppBar} from "./components/AppBar/AppBar";
import Banner from "./components/Banner/Banner";
import Vorteile from "./components/Vorteile/Vorteile";
import Ablauf from "./components/Ablauf/Ablauf";
import RemoveNegative from "./components/RemoveNegtive/RemoveNegative";
import Faq from "./components/Faq/Faq";
import Message from "./components/Message/Message";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
        <AppBar />
        <Banner />
        <Vorteile />
        <Ablauf />
        <RemoveNegative />
        <Faq />
        <Message />
        <Footer />
    </Router>
  );
}

export default App;
