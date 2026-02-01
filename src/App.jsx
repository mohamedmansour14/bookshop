import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

import LoginPages from "./pages/LoginPages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/LoginPages" element={<LoginPages />} />
        <Route path="/ForgetPasswordPage" element={<ForgetPasswordPage />} />
        <Route path="/ResetPasswordPage" element={<ResetPasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
}
