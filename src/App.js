import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import { Supplier } from "./components/supplier";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Supplier />
    </>
  );
}

export default App;
