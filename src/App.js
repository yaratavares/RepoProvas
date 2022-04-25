import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import UserLoginProvider from "./common/contexts/UserToken";
import { StyleGlobal } from "./common/styles/StyleGlobal";
import ModelPage from "./pages/ModelPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <StyleGlobal />
        <UserLoginProvider>
          <Routes>
            <Route path="/login" element={<SignIn />} />
            <Route path="/cadastro" element={<SignUp />} />
            <Route path="/" element={<ModelPage />} />
          </Routes>
        </UserLoginProvider>
      </BrowserRouter>
      <Toaster toastOptions={{ className: "toastThemed" }} />
    </>
  );
}
