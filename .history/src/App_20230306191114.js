import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashBoard from "./components/Layouts/DashBoard";
import LoginPage from "./components/Layouts/LoginPage";
import StartPage from "./components/Layouts/StartPage";
import HeaderTitle from "./components/title/HeaderTitle";
import { AuthProvider } from "./context/authContext";
import FillTheWord from "./components/Layouts/FillTheWord";
import MultiChoice from "./components/Layouts/MultiChoice";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route element={<StartPage></StartPage>}>
            <Route path="/" element={<HeaderTitle></HeaderTitle>}></Route>
            <Route path="/sign-in" element={<LoginPage></LoginPage>}></Route>
            <Route path="/dashboard" element={<DashBoard></DashBoard>}></Route>
            <Route
              path="/fill-in-the-word"
              element={<FillTheWord></FillTheWord>}
            ></Route>
            <Route
              path="/multiple-choice"
              element={<MultiChoice></MultiChoice>}
            ></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
