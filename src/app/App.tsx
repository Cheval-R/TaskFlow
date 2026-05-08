import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import Day from "../pages/Day";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path='' element={<Day/>}/>
      </Route>
    </Routes>
  )
}

export default App;
