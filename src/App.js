import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLoginProvider from "./common/contexts/UserToken";
import { StyleGlobal } from "./common/styles/StyleGlobal";
import ModelPage from "./pages/ModelPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <StyleGlobal />
      <UserLoginProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/disciplinas" element={<ModelPage />} />
        </Routes>
      </UserLoginProvider>
    </BrowserRouter>
  );
}
