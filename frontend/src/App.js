import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./Screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MyNotes from "./Screens/MyNotes/MyNotes";

const App = () => (
  <BrowserRouter>
    <Header />
    <main className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mynotes" element={<MyNotes />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
