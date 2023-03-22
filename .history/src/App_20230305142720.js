import { Route, Routes } from "react-router-dom";
import "./App.css";
import StartPage from "./components/Layouts/StartPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<StartPage></StartPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
