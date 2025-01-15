import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import DetailsPage from "./DetailsPage";
import Header from "./Header";

const App = () => {
  return(
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detailspage" element={<DetailsPage />}></Route>
      </Routes>
    </div>
  )
}

export default App;