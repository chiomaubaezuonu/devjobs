import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import DetailsPage from "./DetailsPage";

const App = () => {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detailspage" element={<DetailsPage />}></Route>
      </Routes>
    </div>
  )
}

export default App;