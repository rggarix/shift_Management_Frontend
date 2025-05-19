import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { Layout } from "./components/Layout/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/staff" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
