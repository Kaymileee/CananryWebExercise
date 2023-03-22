import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashBoard from "./components/Layouts/DashBoard";
import LoginPage from "./components/Layouts/LoginPage";
import StartPage from "./components/Layouts/StartPage";
import HeaderTitle from "./components/title/HeaderTitle";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route element={<StartPage></StartPage>}>
            <Route path="/" element={<HeaderTitle></HeaderTitle>}></Route>
            <Route path="/sign-in" element={<LoginPage></LoginPage>}></Route>
            <Route path="/dashboard" element={<DashBoard></DashBoard>}></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
