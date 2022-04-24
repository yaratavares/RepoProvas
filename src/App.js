import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StyleGlobal } from "./common/styles/StyleGlobal";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <StyleGlobal />
      <Routes>
        <Route path="/cadastro" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
