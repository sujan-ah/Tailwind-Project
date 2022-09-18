import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import { Supplier } from "./components/supplier";
import Service from "./components/service";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Supplier />
      <Service />
    </>
  );
}

export default App;
