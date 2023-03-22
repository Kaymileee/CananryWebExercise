import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import StartPage from "./components/Layouts/StartPage";
import HeaderTitle from "./components/title/HeaderTitle";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<StartPage></StartPage>}>
          <Route path="/" element={<HeaderTitle></HeaderTitle>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
