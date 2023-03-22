import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import StartPage from "./components/Layouts/StartPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<StartPage></StartPage>}>
          <Route
            path="/"
            element={
              <>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus consequatur magni quo fugit laboriosam! Sint
                cupiditate corporis numquam quo est asperiores ut molestias,
                eligendi quisquam aliquid vitae excepturi. Quo, sed!
              </>
            }
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
