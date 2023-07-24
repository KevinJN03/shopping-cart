import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";

import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Shop from "./Components/Shop/Shop";
import Layout from "./Components/Layout";
function App() {
  return (
    <>
    <Layout component={<Body/>}>
      </Layout>
    </>
  );
}

export default App;
