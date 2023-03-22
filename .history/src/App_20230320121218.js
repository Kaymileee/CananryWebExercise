import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashBoard from "./components/Layouts/DashBoard";
import LoginPage from "./components/Layouts/LoginPage";
import StartPage from "./components/Layouts/StartPage";
import HeaderTitle from "./components/title/HeaderTitle";
import { AuthProvider } from "./context/authContext";
import FillTheWord from "./components/Layouts/FillTheWord";
import MultiChoice from "./components/Layouts/MultiChoice";
import ExercisePage from "./components/Layouts/ExercisePage";
import AI from "./components/Layouts/AI";
import Grammar from "./components/Layouts/Grammar";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route element={<StartPage></StartPage>}>
            <Route path="/" element={<HeaderTitle></HeaderTitle>}></Route>
            <Route path="/sign-in" element={<LoginPage></LoginPage>}></Route>
            <Route
              path="/exercise"
              element={<ExercisePage></ExercisePage>}
            ></Route>
            <Route path="/AI" element={<AI></AI>}></Route>
            <Route path="/dashboard" element={<DashBoard></DashBoard>}></Route>
            <Route
              path="/fill-in-the-word"
              element={<FillTheWord></FillTheWord>}
            ></Route>
            <Route
              path="/multiple-choice"
              element={<MultiChoice></MultiChoice>}
            ></Route>
            <Route path="/Grammar" element={<Grammar></Grammar>}>
              <Route
                path="/face-parts"
                element={
                  <>
                    <span>Hello</span>
                  </>
                }
              ></Route>
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
