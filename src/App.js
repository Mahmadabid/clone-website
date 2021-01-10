import React from "react";
import { Header } from "./Components/Header";
import './App.css';
import { Body1 } from "./Components/Body1";
import { Body2 } from "./Components/Body2";
import { Body3 } from "./Components/Body3";
import { Body4 } from "./Components/Body4";
import { Footer } from "./Components/Footer";

function App() {
  
  return (
    <div>
        <div className="content-wrap">
            <Header />
            <Body1 />
            <Body2 />
            <Body3 />
            <Body4 />
        </div>
        <Footer />
    </div>
  );
}

export default App;