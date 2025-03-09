import Layout from "./components/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/HomePage";
import About from "./components/Pages/AboutPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route index element={<Home></Home>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
