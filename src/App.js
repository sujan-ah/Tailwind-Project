import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import { Supplier } from "./components/supplier";
import Service from "./components/service";
import Company from "./components/company";
import Blog from "./components/bolg";
import Map from "./components/map";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Supplier />
      <Service />
      <Company />
      <Blog />
      <Map />
      <Footer />
    </>
  );
}

export default App;
