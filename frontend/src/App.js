import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./Screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./Screens/MyNotes/MyNotes";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen/RegisterScreen";
import store from "./store";
import { Provider } from "react-redux";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";
import CreateNote from "./Screens/SingleNote/CreateNote";
import SingleNote from "./Screens/SingleNote/SingleNote";
import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header setSearch={(s) => setSearch(s)} />
        <main className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} exact />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            {/* <Route path="/notes" element={<MyNotes />} /> */}
            <Route path="/notes" element={<MyNotes search={search} />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/createnote" element={<CreateNote />} />;
            <Route path="/note/:id" element={<SingleNote />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
