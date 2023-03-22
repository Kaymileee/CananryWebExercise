import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import StartPage from "./components/Layouts/StartPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<StartPage></StartPage>}>
          <Route path="/">asd</Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
